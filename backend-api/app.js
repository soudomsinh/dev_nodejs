var express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
var app = express()
const mysql = require('mysql2')
// hashing password
const bcrypt = require('bcrypt');
const saltRounds = 10;
//jwt
var jwt = require('jsonwebtoken')
const secret = 'fullstack-login-24'


app.use(cors())

const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database:'demodb',

});

//test test
app.get('/hello', (req, res)=>{
   res.send('hello')
})

app.post('/register', jsonParser, function (req, res, next) {
   bcrypt.hash(req.body.password, saltRounds, function(err, hashPassW) { //hasing password
      connection.execute(
         'INSERT INTO `user`( `email`, `password`, `fname`, `lname`) VALUES (?, ? ,?,?)', //insert data(user) into database
         [req.body.email, hashPassW, req.body.fname, req.body.lname],
         function(err, results, fields) {
            if(err){
               res.json({status: 'error', message: err})
               return
            }
            res.json({status: 'ok'})
         }
      );
   });      
})

// login with jwt
app.post('/login', jsonParser, function (req, res, next) {
   connection.execute(
      'SELECT * FROM user WHERE email=?',
      [req.body.email],
      function(err, user, fields) {
         if(err) {res.json({status: 'error', message: err}); return}
         if(user.length == 0){res.json({status: 'error', message: 'no user found'}); return}
         bcrypt.compare(req.body.password, user[0].password, function(err, isLogin) {
            if(isLogin){
               var token = jwt.sign({email: user[0].email}, secret, {expiresIn: '1h'});
               res.json({status: 'ok', message:'login success', token})
            }else{
               res.json({status: 'error', message: 'login failed'})
            }
        });
      }
   );
})

//authentication
app.post('/authen', jsonParser, function (req, res, next) {
   try {
      const token = req.headers.authorization.split(' ')[1]
      var decoded = jwt.verify(token, secret);
      res.json({status: 'ok', decoded})
   } catch (error) {
      res.json({status: 'error', message: 'Invalid. Token dont match'}) 
   }
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})