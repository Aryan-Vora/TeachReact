//set up an express server
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(port, () => console.log(`Server running on port ${port}`));
