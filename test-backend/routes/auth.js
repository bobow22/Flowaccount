var express = require("express");
var router = express.Router();
const pool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// (POST) /api/auth/token
router.post("/token", async function (req, res) {
  const { username, password } = req.body; // รับ post json object

  const result = await pool.query(
    `SELECT * FROM general_register WHERE username='${username}'`
  );

  console.log(result[0]);
  console.log(result[0][0]);
  // พบ record
  if (result[0].length > 0) {
    const passwordMatch = await bcrypt.compare(password, result[0][0].password);
    if (passwordMatch) {

      const privateKey = "flowaccount_mungtaro";
      const token = jwt.sign(
        {
          id: result[0][0].id,
          username: result[0][0].username,
        },
        privateKey,
        { expiresIn: "90000ms" }
      );
      res.json({ token: token });
    } else {
      res.status(401).send({ error: "password does not match" });
      return;
    }
  } else {
    res.status(401).send({ error: "user not found" });
    return;
  }
});

module.exports = router;
