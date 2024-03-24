const express = require('express');
const mysql = require("mysql");
const cors = require("cors")


const app = express()
app.use(cors())

app.get('/', (re, res)=>{
  return res.json("From BackEnd Side");
})

app.listen(8081, ()=> {
  console.log("listening")
})


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prastblog-app",
});

app.get('/blog', (req, res)=> {
  const sql = "SELECT * FROM berita";
  connection.query(sql, (err, data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})


// app.get("/", (req, res) => {
//   connection.query("SELECT * FROM users", (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });

