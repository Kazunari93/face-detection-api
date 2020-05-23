const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

/*
/ --> res = working
/signin --> POST = success/fail
/register --> POST = user
/profile/:user --> GET = user
/image --> PUT --> user
*/
