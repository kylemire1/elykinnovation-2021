// This is a Netlify function. There is more configuration involved than just this file to get this working!
// See the Gatsby docs here for how to set it up: https://support.gatsbyjs.com/hc/en-us/articles/360054529274-Deploying-Netlify-Functions-from-Gatsby-Cloud
// To learn how to set things up on the WordPress side, watch this video: https://www.youtube.com/watch?v=ZRQ94PMNEcg

exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: 'Hello World!',
  }
}
