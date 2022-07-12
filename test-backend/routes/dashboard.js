var express = require("express");
var router = express.Router();
const validate = require("./validate-get");
const pool = require("../config/database");

router.get("/:user_id", async function (req, res) {

  const { user_id } = req.params;

  // const result = await pool.query(`select * from cash_invoice_items where cash_invoice_id = ?`, [parseInt(user_id)]);
  const result = await pool.query(`select cash_invoice.cash_invoice_id,
  cash_invoice.user_id,
  cash_invoice_items.item_name,
  cash_invoice_items.item_total,
  sum(item_total)
  from cash_invoice
  inner join cash_invoice_items
  on cash_invoice.cash_invoice_id = cash_invoice_items.cash_invoice_id
  WHERE user_id = ?
  GROUP by item_name
  order by sum(item_total) desc;`, [parseInt(user_id)]);

  res.json(result[0])

});

module.exports = router;