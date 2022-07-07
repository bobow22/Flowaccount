var express = require("express");
var router = express.Router();
const pool = require("../config/database");
const bcrypt = require("bcrypt");


router.post("/", async function (req, res) {

  const { username, password, phone_number, first_name, last_name, company_name, company_address, tax_id } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const checkUser = await pool.execute(`select username from general_register where username = ?`, [username])

  if (checkUser.length === 0) {

    const result = await pool.execute(`INSERT INTO register (phone_number, first_name, last_name, company_name, company_address, tax_id, register_type) VALUES (?, ?, ?, ?, ?, ?, "general")`, [phone_number, first_name, last_name, company_name, company_address, tax_id])

    const result2 = await pool.execute(
      `INSERT INTO general_register (username, password, register_id) VALUES (?, ?, ?)`,
      [username, hashedPassword, result[0].insertId]
    );

    res.send({ user_id: result[0].insertId, general_register_id: result2[0].insertId });

  } else {
    res.send("Email is already registered.")
  }

});

module.exports = router;
