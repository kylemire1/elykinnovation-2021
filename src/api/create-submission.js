import fetch from 'node-fetch'
// This file is a Gatsby Cloud function. When hosting on Gatsby Cloud, it will automatically be deployed as an API route.
// See the Gatsby docs here to get started: https://www.gatsbyjs.com/docs/how-to/functions/

// Watch this video to learn how to set the custom GraphQL up on the WordPress side: https://www.youtube.com/watch?v=ZRQ94PMNEcg

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const { formData, recaptchaToken } = req.body

  const recaptchaValidationResult = await recaptchaValidation({
    recaptchaToken,
  })

  if (!recaptchaValidationResult.successful) {
    res.status(400).send(recaptchaValidationResult.message)
    return
  }

  try {
    // Authenticating with the WordPress site to get a JWT
    const loginData = await fetch(process.env.WPGRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            mutation LoginMutation(
              $clientMutationId: String!
              $username: String!
              $password: String!
            ) {
              login(
                input: {
                  clientMutationId: $clientMutationId
                  username: $username
                  password: $password
                }
              ) {
                authToken
                refreshToken
              }
            }
          `,
        variables: {
          clientMutationId: generateMutationId(),
          username: process.env.WP_AUTH_USERNAME,
          password: process.env.WP_AUTH_PASSWORD,
        },
      }),
    })
      .then(res => res.json())
      .then(result => result.data)

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
      .then(result => {
        return result.data
      })

    if (!submissionResult.createSubmission.success) {
      throw new Error(JSON.parse(submissionResult.createSubmission.data))
    }

    res.status(200).json({
      error: false,
      message: 'success',
    })
    return
  } catch (error) {
    res.status(200).json({
      error: true,
      message:
        error.message ||
        'Error submitting your form. Please try again or contact us at 904.998.1935',
    })
    return
  }
}

const generateMutationId = () => Math.random().toString(36).substring(7)

const recaptchaValidation = async ({ recaptchaToken }) => {
  const result = await (async () => {
    try {
      const response = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            secret: process.env.RECAPTCHA_V3_SECRET_KEY,
            response: recaptchaToken,
          }),
        }
      ).then(res => res.json())
      return { successful: true, message: response.score }
    } catch (error) {
      let message

      if (error.response) {
        message = `reCAPTCHA server responded with non 2xx code: ${error.response}`
      } else if (error.request) {
        message = `No reCAPTCHA response received: ${error.request}`
      } else {
        message = `Error setting up reCAPTCHA response: ${error.message}`
      }

      return { successful: false, message }
    }
  })()

  return result
}
