var mysql = require('mysql');
const express = require('express');
var cors = require('cors');
const app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.urlencoded({extended: false}));
app.listen(4400, (req, res)=>{
    console.log("listening in port 4400...");
});


// reading data
app.get('/users', (req, res)=>{
    con.query("SELECT * FROM gamesystem.players", function (err, result, fields) {
        if (err) throw err;
        res.set('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('X-Total-Count', result.length)
        res.send(result)
        console.log("Records sent!");
      });
});
 
//updating data
app.put('/users/:id', (req, res)=>{
    console.log('here', req.body);
    let id = String(req.body.id);
    let userName = String(req.body.userName);
    let email = String(req.body.email);
    let password = String(req.body.password);
    let phone = String(req.body.phone);
    let isBanned = req.body.isBanned;
    let noOfTournaments = req.body.noOfTournaments;
    con.query("UPDATE gamesystem.players SET userName = '" + userName + "', email = '" + email + "', password = '" + password + "', isBanned = '" + isBanned + "', phone = '" + phone + "', noOfTournaments = '" + noOfTournaments + "'  WHERE id = '" + id + "';", function (err, result, fields) {
        if (err) throw err;
        console.log("new record added to db");
    });
});

// to get a specific record
app.get('/users/:id', (req, res)=>{
    console.log(req.body);
});


// to delete a record
app.delete('/users/:id', (req, res)=>{
    let id = (req.params.id);
    con.query("DELETE FROM gamesystem.players WHERE id='" + id + "';", function (err, result, fields) {
        if (err) throw err;
        console.log("record deleted from db");
    });
});

// adding new data
app.post('/users', (req,res)=>{
    let {id, userName, password, phone, email, isBanned, noOfTournaments} = req.body;
    noOfTournaments = 1;
    isBanned = 0;
      console.log("here", req.body);
      con.query("INSERT INTO gamesystem.players(id, userName, password, phone, email, isBanned, noOfTournaments) VALUES('" + id + "','" + userName + "','" + password + "','" + phone + "','" + email + "','" + isBanned + "','"  + noOfTournaments + "');", function (err, result, fields) {
          if (err) throw err;
          console.log("new record added to db");
          res.send({status: "success"});
      });
  });
app.post('/signup', (req,res)=>{
    let {userName, password, phone, email, isBanned, noOfTournaments}= req.body;
    let id = userName.slice(0, 2) + password.slice(0, 2);
    noOfTournaments = 1;
    isBanned = 0;
    console.log(req.body);
    con.query("INSERT INTO gamesystem.players(id, userName, password, phone, email, isBanned, noOfTournaments) VALUES('" + id + "','" + userName + "','" + password + "','" + phone + "','" + email + "','" + isBanned + "','"  + noOfTournaments + "');", function (err, result, fields) {
        if (err) throw err;
        console.log("new record added to db");
        res.send({status: "success"});
    });
});

app.get('/playerProfile/:id', (req,res) => {
  const player_id = req.params.id;
  const sql = `select * from gamesystem.players where id = ?`;

  const value = [player_id];

  con.query(sql, [value], (err, docs) => {
    if (err) {
      return res.status(400).json({
        status: 'error',
        error: {
          message: err.message,
        },
      });
    }
    console.log(docs);
    res.status(200).json({
      status: 'success',
      data: {
        message: 'Users Data',
        docs,
      },
    });
  });
});

app.post('/login', (req, res) => {
    let userName = req.body.email;
    let password = req.body.password;
    con.query("SELECT * FROM gamesystem.players", function (err, result, fields) {
        if (err) throw err;
        for(var x = 0; x < result.length; x++){
            if(result[x].userName == userName && result[x].password == password){
                console.log("here");
                res.send({status: "success"});
                return;
            }
        }
        res.send({status:"failed"});
      });
})