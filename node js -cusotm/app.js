const Express = require("express");
const dotenv = require("dotenv").config();
const reqTime = require("./middleware/index");
const fs = require("fs");

const app = Express();

const port = process.env.PORT || 5000;

app.use(reqTime);
app.listen(port, () => {
  console.log("listing to the port");
});

app.get("/", (req, res) => {
  return res.send(`hello world , ${req.time}`);
});

// app.all("/redirect", (req, res, next) => {
//   // console.log("request ", req);
//   // next();
//   // return res.send("request numbers");
//   return res.redirect("https://expressjs.com/en/guide/routing.html");
// });

app.get("/book", (req, res) => {
  fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log(data);
    }
    console.log("respnse data", data);
    return res.send("response" + data);
    // console.log("data", data);
  });
});

app.get("/boo+k", (req, res) => {
  return res.send("response url accepts boooook");
});

app.get("/change/book/:id-:newid", (req, res) => {
  res.send("checking - in url " + req.params.id + "----" + req.params.newid);
});
