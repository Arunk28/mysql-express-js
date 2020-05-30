var express  = require('express');
var cors = require('cors');

var app=  new express();
app.use(cors());
var mysql      = require('mysql');
var config = require('./config')
//var connection = mysql.createConnection(config);
app.get('/',(req,res)=>{    
var connection = mysql.createConnection(config);

connection.connect();
connection.query('SELECT * FROM examonline.userdata', function (error, results, fields) {
    console.log(results);
  if (error) console.log(error);
  res.send( JSON.stringify(results));
  connection.end();
});



});
bodyParser = require('body-parser').json();
app.post('/api/signup',bodyParser,(req,res)=>{
    //normal validations    
    if(!req.body.name && !req.body.password && !req.body.picture)
    {
        res.status(400).send("400 bad request");
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    const data ={name : req.body.name,password : req.body.password,picture:req.body.picture}

    let sql = `CALL InsertData("${data.name}","${data.password}","${data.picture}")`;

    connection.query(sql, true, (error, results, fields) => {
    if (error) {return console.error(error.message);}
    res.send(results);
    connection.end();
    });
    
    
});
const port= process.env.PORT  || 3000
app.listen(port,()=>console.log(`am on at ${port}`));
