var express = require("express");
var router = express.Router();
const validate = require("./validate-get");
const pool = require("../config/database");

router.get("/:user_id", async function (req, res) {

  const { user_id } = req.params;

  const result = await pool.query(`select * from register where user_id = ?`, [parseInt(user_id)]);

  res.json({ result: result[0] })

});

module.exports = router;