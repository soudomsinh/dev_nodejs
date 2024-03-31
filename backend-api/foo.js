var express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
var app = express()
const sql = require("mssql");
// hashing password
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors())


// MSSQL connection configuration
const config = {
            user: 'root',
            password: 'root',
            server: 'localhost:1433',
            database: 'mydb',
            options: {
                  trustServerCertificate: true // Change to true if you're connecting to Azure SQL Server
      }
    };

// Create a new MSSQL connection pool
const pool = new sql.ConnectionPool(config);


// Acquire a connection from the pool
pool.connect().then(() => {
      console.log('Connected to MSSQL');
    }).catch(err => {
      console.error('Error connecting to MSSQL', err);
});


app.post('/register', jsonParser, function (req, res, next) {
      bcrypt.hash(req.body.password, saltRounds, function(err, hashPassW) {
        const query = `INSERT INTO [user] (email, password, fname, lname) VALUES (@email, @password, @fname, @lname)`;
        const params = {
          email: req.body.email,
          password: hashPassW,
          fname: req.body.fname,
          lname: req.body.lname
        };
    
        pool.request()
          .input('email', sql.VarChar, params.email)
          .input('password', sql.VarChar, params.password)
          .input('fname', sql.VarChar, params.fname)
          .input('lname', sql.VarChar, params.lname)
          .query(query, (err, results) => {
            if (err) {
              res.json({ status: 'error', message: err });
              return;
            }
            res.json({ status: 'ok' });
          });
      });
});

app.listen(6000, function () {
  console.log('CORS-enabled web server listening on port 6000')
})