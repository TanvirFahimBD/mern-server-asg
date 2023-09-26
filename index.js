const app = require("./app");
require("dotenv").config("./config.env");
const port = process.env.RUNNING_PORT;

app.listen(port, () => {
  console.log(`listening now on port ${port}`);
});
