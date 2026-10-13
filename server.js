const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res, next) => {
  console.log("Here is my backend");
  //   res.status(500).json({ message: "Testing the 500 error" });
  //   res.json({ message: "Testing the 500 error" });
  //   res.send("Hi");
  //   res.download("server.js");
  res.render("index", { text123: "Message if locals.text do not fail" });
});
app.listen(1010);
