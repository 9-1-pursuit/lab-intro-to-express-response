const app = require("./app.js");

// config
const PORT = 3003;

// Listen
app.listen(PORT, () => {
  console.log(`Very active on ${PORT}`);
});
