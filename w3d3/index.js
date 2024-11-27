const express = require("express");
const {
  authenticateThief,
  createThief,
  fetchThiefByEmail,
} = require("./helpers/thiefHelpers");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8080;

// Everything in the folder "public" will be accessible without having to build a route
app.use(express.static("public"));
// Take a form string and convert it to an object (req.body)
app.use(express.urlencoded({ extended: false }));
// Take the cookie info and make a cool object out of it (req.cookies)
app.use(cookieParser());
// Tells render to use EJS by default
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // SOMETHING
  const thiefEmail = req.cookies.email;

  const { error, thief } = fetchThiefByEmail(thiefEmail);

  if (error) {
    const templateVars = { thief: null };
    return res.render("index", templateVars);
  }

  const templateVars = { thief };
  return res.render("index", templateVars);
});

app.get("/thieves/new", (req, res) => {
  // SOMETHING
  const templateVars = { error: req.cookies.error };
  res.clearCookie("error")

  return res.render("new-thief", templateVars);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, thief } = authenticateThief(email, password);

  if (error) {
    return res.send(error);
  }

  res.cookie("email", thief.email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");
  return res.redirect("/");
});

app.post("/thieves", (req, res) => {
  const { error, thief } = createThief(req.body);

  if (error) {
    console.log(error);
    res.cookie("error", error);
    return res.redirect("/thieves/new");
  }

  res.cookie("email", thief.email);
  return res.redirect("/");
});

// Start listening to requests on port specified by the port variable
app.listen(port, () => console.log(`Express server running on port ${port}`));
