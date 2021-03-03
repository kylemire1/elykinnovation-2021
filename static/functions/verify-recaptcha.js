const fetch = require('node-fetch')

// This file is a Netlify function. Netlify automatically ships it off to AWS Lambda to run it on the server side.
// There is more configuration involved than just this file to get this working!
// See the Gatsby docs here for how to set it up. (If your function has dependencies like node-fetch above, follow Option 1 as described on the page): https://support.gatsbyjs.com/hc/en-us/articles/360054529274-Deploying-Netlify-Functions-from-Gatsby-Cloud
// To learn how to set things up on the WordPress side, watch this video: https://www.youtube.com/watch?v=ZRQ94PMNEcg
// If running into build / deploy issues with Netlify functions, try clearing cache in Gatsby Cloud

exports.handler = async function (event) {
  const recaptchaResponse = JSON.parse(event.body)
  console.log({ recaptchaResponse })

  // Use the JWT to send an authenticated request with the form submission
  const verificationResponse = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaResponse,
      }),
    }
  )
    .then(res => res.json())
    .then(result => result)
    .catch(err => {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          error: err,
          message: 'There was a problem verifying the recaptcha',
        }),
      }
    })
  console.log({ verificationResponse })

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(verificationResponse),
  }
}

const generateMutationId = () => Math.random().toString(36).substring(7)
