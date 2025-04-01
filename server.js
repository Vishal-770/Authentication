const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");

const authRouter = require("./routes/auth");

const app = express();

//mongodb connection
const { connectToMongoDB } = require("./connections/connection");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs setup

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "public")));

//cookie parser module npm to set cookies and read cookies
app.use(cookieParser());

// home page

app.get("/", (req, res) => {
  return res.render("homepage");
});
//authentication

app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
