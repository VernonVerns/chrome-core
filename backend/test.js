const axios = require("axios");

const testPayload = {
  name: "John Doe",
  email: "fezekileplaatyi@myplusplus.com",
  subject: "Test Email",
  message: "This is a test email from AWS Lambda.",
};

const lambdaUrl =
  "https://vzv5ij6xjowamkf3smddvqfhly0pecfm.lambda-url.af-south-1.on.aws/";

const testLambda = async () => {
  try {
    const response = await axios.post(lambdaUrl, testPayload, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Success:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

testLambda();
