const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const noteRouter = require("./routes/noteRoutes.js");
const logRouter = require("./routes/logRoute.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "https://notes-app-dun-beta.vercel.app", // ✅ no slash
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/notes", noteRouter);
app.use("/logs", logRouter);

app.get("/", (req, res) => {
  res.send("Welcome please login to access the notes");
});

module.exports = app;
