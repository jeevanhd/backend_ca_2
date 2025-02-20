const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const userRoute = require("./route.js");
app.use(express.json());

app.use("/user", userRoute);

app.use("/", (req, res) => {
  return res.send("Welcome to my backend! For Ca 2 :)");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
