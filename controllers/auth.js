
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");



function handleloginreq(req,res){
  res.render("signup", { message: "welcome to login" });
};
function handlesignupreq(req,res){
  res.render("signup", { message: "welcome to signup" });
}

async function handlesignupapi(req, res) {
  const { name, email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email }, "secret");
    res.cookie("token", token);
    return res.render("dashboard", {
      name: name,
    });
  } catch (error) {
    return res.render("signup", {
      message: "User with Username or email already Exisits",
    });
  }
}




async function handleloginapi(req, res) {
  const { name, password } = req.body;
  const userdata = await User.findOne({ name });

  if (!userdata) {
    return res.render("signup", {
      message: "Username or password  is  incorrect",
    });
  }

  const match = await bcrypt.compare(password, userdata.password);
  if (!match) {
    return res.render("signup", {
      message: "Username or password is incorrect",
    });
  }

  if (match) {
    const token = jwt.sign({email:userdata.email}, "secret");
    res.cookie("token", token);

    res.render("dashboard", {
      name: userdata.name,
    });
  }
}
async function handlelogoutapi(req, res) {
  res.clearCookie("token");
  res.redirect("/auth/login"); 
}


module.exports={
  handleloginreq,
  handlesignupreq,
  handlesignupapi,
  handleloginapi,
  handlelogoutapi,
};



