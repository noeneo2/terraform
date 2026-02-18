const functions = require("@google-cloud/functions-framework");

functions.http("hello", (req, res) => {
  res.json({ message: "Hello from Cloud Function!" });
});
