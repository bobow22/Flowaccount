const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const bodyParser = require('body-parser')
const passport = require('passport')
const FacebookStrategy = require("passport-facebook").Strategy;
const cors = require("cors");



const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
      console.log(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
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
      console.log(response.data)
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error)
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
      console.log(error)
    });
});

const { facebookPassportConfig } = require('./passport')
facebookPassportConfig()

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

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
});




// app.post('/signin/facebook', async (req, res) => {
//   console.log('Request -->', req.body.user)

//   try {
//     const response = await axios({
//       method: 'get',
//       url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=<5233430176714318>&client_secret=<371453627b3bb9becd60fdb047fcea34>&fb_exchange_token=${req.body.user.accessToken}`,
//     })
//     const result = response.data
//     console.log('Result -->', result)

//     // If (result) --> process signup (new user) / signin (exiting user)
//   } catch (error) { }
// })