const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ejs
app.set("view engine", "ejs");

const plNames = [];

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World</h1> ");
  res.render("index", { progName: plNames });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const lang = req.body.plang;
  //   console.log(lang);
  plNames.push(lang);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
