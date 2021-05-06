import fetch from "node-fetch";

export default async function handler(req, res) {
  const formData = req.body;

  try {
    // Authenticating with the WordPress site to get a JWT
    const loginData = await fetch(process.env.WPGRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .then((res) => res.json())
      .then((result) => result.data);

    // Use the JWT to send an authenticated request with the form submission
    const submissionResult = await fetch(process.env.WPGRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .then((res) => res.json())
      .then((result) => result.data);

    if (!submissionResult.createSubmission.success) {
      throw new Error();
    }

    res.status(200).json({
      error: false,
    });
    return;
  } catch (error) {
    res.status(200).json({
      error: true,
      message:
        "Error submitting your form. Please try again or contact us at 904.998.1935",
    });
    return;
  }
}

const generateMutationId = () => Math.random().toString(36).substring(7);
