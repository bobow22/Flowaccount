const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
var cors = require("cors");

const app = express();
app.use(cors({ credentials: true, origin: true }));

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

app.post("/post-receipt", async (req, res) => {
  axios
    .post("https://openapi.flowaccount.com/test/receipts", {})
    .then((result) => res.send(result.data))
    .catch((err) => res.status(401));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
