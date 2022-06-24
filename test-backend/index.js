const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

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
});

app.post("/post-receipt", (req, res) => {
  let token = req.body.headers.Authorization;
  let dataObj = req.body.dataObj;
  console.log(token);
  console.log(dataObj);

  var axios = require("axios");
  var data = JSON.stringify(dataObj);
  console.log(data);

  var config = {
    method: "post",
    url: "https://openapi.flowaccount.com/test/receipts",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
