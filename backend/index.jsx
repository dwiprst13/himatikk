const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "himatik_db",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

