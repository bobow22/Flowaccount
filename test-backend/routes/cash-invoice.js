var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const validate = require("./validate");

router.post("/", validate, async function (req, res) {

  let token = req.body.Authorization;
  // let dataObj = req.body.dataObj;

  console.log("token", token);
  // console.log("test1", dataObj);

  const { user_id, document_number, date, due_date, salesperson, customer_company, customer_name, customer_address, customer_tax_id, sub_total, discount, total_after_discount, vat, grand_total, item_name, item_quantity, item_unit, price_per_unit, item_total } = req.body.dataObj;

  const result = await pool.execute(`INSERT INTO cash_invoice (user_id, document_number, date, due_date, salesperson, customer_company, customer_name, customer_address, customer_tax_id, sub_total, discount, total_after_discount, vat, grand_total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [user_id, document_number, date, due_date, salesperson, customer_company, customer_name, customer_address, customer_tax_id, sub_total, discount, total_after_discount, vat, grand_total])

  // const result2 = await pool.execute(
  //   `INSERT INTO cash_invoice_items (cash_invoice_id, item_name, item_quantity, item_unit, price_per_unit, item_total) VALUES (?, ?, ?, ?, ?, ?)`,
  //   [result[0].insertId, item_name, item_quantity, item_unit, price_per_unit, item_total]
  // );


  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ cash_invoice_id: result[0].insertId, item_id: "result2[0].insertId" });




  // var config = {
  //   method: "post",
  //   url: "https://openapi.flowaccount.com/test/cash-invoices",
  //   headers: {
  //     Authorization: token,
  //     "Content-Type": "application/json",
  //   },
  //   data: dataObj,
  // };

  // axios(config)
  //   .then(function (response) {
  //     res.json(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   });
});

module.exports = router;
