// This is a Netlify function. There is more configuration involved than just this file to get this working!
// See the Gatsby docs here for how to set it up: https://support.gatsbyjs.com/hc/en-us/articles/360054529274-Deploying-Netlify-Functions-from-Gatsby-Cloud
// To learn how to set things up on the WordPress side, watch this video: https://www.youtube.com/watch?v=ZRQ94PMNEcg

import fetch from 'node-fetch'

export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  }
  const formData = JSON.parse(event.body)
  // Authenticating with the WordPress site to get a JWT
  const loginData = await fetch(process.env.WPGRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            mutation LoginMutation {
              login(
                input: {
                  password: "${process.env.WP_AUTH_PASSWORD}"
                  username: "${process.env.WP_AUTH_USERNAME}"
                  clientMutationId: "${generateMutationId()}"
                }
              ) {
                authToken
                refreshToken
                user {
                  email
                }
              }
            }
          `,
    }),
  })
    .then(res => res.json())
    .then(result => result.data)
    .catch(err => {
      return {
        statusCode: 200,
        body: JSON.stringify({
          error: err,
          message:
            'There was a problem authenticating with the WordPress server',
        }),
      }
    })

  // Use the JWT to send an authenticated request with the form submission
  const submissionResult = await fetch(process.env.WPGRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${loginData.login.authToken}`,
    },
    body: JSON.stringify({
      query: `
          mutation CreateSubmissionMutation(
            $clientMutationId: String!
            $name: String!
            $email: String!
            $phone: String
            $interest: String!
            $message: String!
          ) {
            createSubmission(
              input: {
                clientMutationId: $clientMutationId
                name: $name
                email: $email
                phone: $phone
                interest: $interest
                message: $message
              }
            ) {
              success
              data
            }
          }
        `,
      variables: {
        clientMutationId: generateMutationId(),
        ...formData,
      },
    }),
  })
    .then(res => res.json())
    .then(result => result)
    .catch(err => {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          error: err,
          message:
            'There was a problem submitting the form data to the WordPress server',
        }),
      }
    })

  if (!submissionResult) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        error: err,
        message:
          'Internal Server Error while submitting the form data to the WordPress server',
      }),
    }
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(submissionResult),
  }
}

const generateMutationId = () => Math.random().toString(36).substring(7)
