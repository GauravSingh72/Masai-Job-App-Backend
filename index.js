const express = require("express");
const { connectDB } = require("./config/db");
const { JobRouter } = require("./routes/jobRoutes.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Masai Job Backend");
});
app.use("/jobPosts", JobRouter);

app.listen(PORT, async (req, res) => {
  try {
    await connectDB;
    console.log(`connected at port ${PORT}`);
  } catch (error) {
    console.log("connection failded", error);
  }
});
