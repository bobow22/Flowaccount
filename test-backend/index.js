const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieSession = require('cookie-session')
const session = require('express-session');
const cors = require("cors");
const isLoggedIn = require('./Middleware/auth')

//---------------------Test-----------------------
const pool = require("./config/database.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//------------------------------------------------

require('./passport-facebook')
require('./passport-google')

var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var cashInvoiceRouter = require("./routes/cash-invoice");
var cashInvoiceSummaryRouter = require("./routes/cash-invoice-summary")
var businessInfoRouter = require("./routes/business-info")
var dashboardRouter = require("./routes/dashboard")

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cash-invoice", cashInvoiceRouter);
app.use("/api/cash-invoice-summary", cashInvoiceSummaryRouter);
app.use("/api/business-info", businessInfoRouter)
app.use("/api/dashboard", dashboardRouter)






//----------------------------------- Test Register ---------------------------------------
app.post('/register',async function (req, res){
  const { username, password, phone_number, first_name, last_name, company_name, company_address, tax_id } = req.body;

  //------bcrypt-----
  const hashedPassword = await bcrypt.hash(password, 10);

  const checkUser = await pool.execute(`select username from general_register where username = ?`, [username])
  console.log(checkUser[0])
  console.log(checkUser[0].length)

  //------------Check User----------------
  if (checkUser[0].length === 0) {

    const result = await pool.execute(`INSERT INTO register (phone_number, first_name, last_name, company_name, company_address, tax_id, register_type) VALUES (?, ?, ?, ?, ?, ?, "general")`, [phone_number, first_name, last_name, company_name, company_address, tax_id])

    const result2 = await pool.execute(
      `INSERT INTO general_register (username, password, register_id) VALUES (?, ?, ?)`,
      [username, hashedPassword, result[0].insertId]
    )

    res.status(200).json({status: 'Success', user_id: result[0].insertId, general_register_id: result2[0].insertId });

  } else {
    res.status(400).send("Email is already registered.")
  }
})

const privateKey = "codecamp_very_$secr3T!";

//----------------------------------- Test Login ---------------------------------------
app.post('/login',async function (req, res){ 

  const { username, password } = req.body; // รับ post json object

  const result = await pool.query(
    `SELECT * FROM general_register WHERE username='${username}'`
  )

  console.log(result[0])
  console.log(result[0][0])

  if (result[0].length > 0) {
    const passwordMatch = await bcrypt.compare(password, result[0][0].password)
    if (passwordMatch) {

      const token = jwt.sign(
        {
          id: result[0][0].id,
          username: result[0][0].username,
        },
        privateKey,
        { expiresIn: "90000ms" }
      )

    const result2 = await pool.query(`SELECT * FROM register WHERE user_id = '${result[0][0].register_id}'`)

    //-----------login successful
    res.json({status:'ok', token: token, user_id: result2[0][0].user_id, company_name: result2[0][0].company_name })
      
    } else {
      //-----------login failed
      res.status(401).send({ error: "password does not match" })
      return
    }
    
  } else {
    res.status(401).send({ error: "user not found" })
    return
  }
})



//----------------------------------- Test Auth ---------------------------------------
app.post("/authen", function (req, res) {
  try{

    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, privateKey)
    res.json({status:'ok', decoded})
    res.json({decoded})

  } catch(err){
    res.json({status:'error', message: err.message})
  }
})





// Get Token
app.get("/", (req, res) => {
  const requestBody = {
    client_id: "thai-proggrammer-camp-client",
    client_secret: "YqfVrGkhQdFNYMpjxhAerLQHCihSPFMJXRUPc",
    grant_type: "client_credentials",
    scope: "flowaccount-api",
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(
      "https://openapi.flowaccount.com/test/token",
      querystring.stringify(requestBody),
      config
    )
    .then((response) => {
      // console.log(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      // console.log(error)
    })

  // axios({
  //   method: "post",
  //   url: "https://openapi.flowaccount.com/test/token",
  //   body: {
  //     client_id: "thai-proggrammer-camp-client",
  //     client_secret: "YqfVrGkhQdFNYMpjxhAerLQHCihSPFMJXRUPc",
  //     grant_type: "client_credentials",
  //     scope: "flowaccount-api",
  //     guid: "",
  //   },
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
})

app.get("/company", (req, res) => {
  let token2 = req.headers.authorization;
  console.log(token2)
  var config = {
    method: 'get',
    url: 'https://openapi.flowaccount.com/test/company/info',
    headers: {
      'Authorization': token2
    }
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // console.log(response.data)
      res.json(response.data)
    })
    .catch(function (error) {
      // console.log(error)
    })
})

app.post("/cash-invoice", (req, res) => {
  let token = req.body.headers.Authorization;
  let dataObj = req.body.dataObj;

  console.log("token", token);
  console.log("test1", dataObj);

  var config = {
    method: "post",
    url: "https://openapi.flowaccount.com/test/cash-invoices",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data: dataObj,
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      // console.log(error)
    });
});


/* FACEBOOK */
app.use(cookieSession({
  name: 'facebook-auth-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    session: false,
    // successRedirect: 'http://localhost:3001/cashinvoice',
    failureRedirect: 'http://localhost:3001'
  }),
  function (req, res) {
    console.log('User -->', req.user)
    res.redirect('http://localhost:3001/cashinvoice');

    // Handle user with database --> new user (sign up --> create new user) / sign in
    // Send jwt token back to frontend --> respond / res.cookies

  });

app.get('/logout', (req, res) => {
  console.log("b req.user", req.user)
  console.log("b reg.session", req.session)
  req.session = null;
  console.log("a req.session", req.session)
  req.logout()
  console.log("a req.user", req.user)
  res.redirect('http://localhost:3001');
})


/* Google Auth */
/* EXPRESS */

// Middleware
app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.get('/', function (req, res) {
  res.redirect('http://localhost:3001');
});

/*  GOOGLE PASSPORT SETUP  */
// var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) =>
  res.redirect('http://localhost:3001/cashinvoice'));

app.get('/error', (req, res) =>
  res.send("error logging in"));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  function (req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
});


