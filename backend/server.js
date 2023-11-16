const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const path = require("path");

// Set up CORS options
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "frontend/dist"))); // Serve static files

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/echo", (req, res) => {
  const userInput = req.body.userInput;
  res.json({ userInput });
});

// All other GET requests not handled will return the frontend's index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
