// Dependencies
const app = require("./app.js");

// Configuration
const PORT = 3003;

// Listen
app.listen(PORT, () => {
  console.log(`waiting for a request on port ${PORT}`);
});
