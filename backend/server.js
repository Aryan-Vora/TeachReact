//set up an express server
const express = require("express");
const app = express();
const port = 5000;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(port, () => console.log(`Server running on port ${port}`));
