var express = require("express");
var router = express.Router();
// const jwt = require("jsonwebtoken");
const validate = require("./validate-post");
const pool = require("../config/database");

router.post("/", async function (req, res) {

  const { user_id, document_number, date, due_date, salesperson, customer_company, customer_name, customer_address, customer_tax_id, sub_total, discount, total_after_discount, vat, grand_total, items } = req.body;

  try {
    const result = await pool.query(`INSERT INTO cash_invoice (user_id, document_number, date, due_date, salesperson, customer_company, customer_name, customer_address, customer_tax_id, sub_total, discount, total_after_discount, vat, grand_total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [user_id, document_number, date, due_date, salesperson, customer_company, customer_name, customer_address, customer_tax_id, sub_total, discount, total_after_discount, vat, grand_total])


    const item_result1 = await pool.query(
      `INSERT INTO cash_invoice_items (cash_invoice_id, item_name, item_quantity, item_unit, price_per_unit, item_total) VALUES (?, ?, ?, ?, ?, ?)`,
      [result[0].insertId, items[0].item_name, items[0].item_quantity, items[0].item_unit, items[0].price_per_unit, items[0].item_total]
    );

    const item_result2 = await pool.query(
      `INSERT INTO cash_invoice_items (cash_invoice_id, item_name, item_quantity, item_unit, price_per_unit, item_total) VALUES (?, ?, ?, ?, ?, ?)`,
      [result[0].insertId, items[1].item_name, items[1].item_quantity, items[1].item_unit, items[1].price_per_unit, items[1].item_total]
    );

    const item_result3 = await pool.query(
      `INSERT INTO cash_invoice_items (cash_invoice_id, item_name, item_quantity, item_unit, price_per_unit, item_total) VALUES (?, ?, ?, ?, ?, ?)`,
      [result[0].insertId, items[2].item_name, items[2].item_quantity, items[2].item_unit, items[2].price_per_unit, items[2].item_total]
    );

    const item_result4 = await pool.query(
      `INSERT INTO cash_invoice_items (cash_invoice_id, item_name, item_quantity, item_unit, price_per_unit, item_total) VALUES (?, ?, ?, ?, ?, ?)`,
      [result[0].insertId, items[3].item_name, items[3].item_quantity, items[3].item_unit, items[3].price_per_unit, items[3].item_total]
    );
    // ตอบกลับ client เป็น id ของ user ที่ insert
    res.send({ cash_invoice_id: result[0].insertId, item_result1: item_result1[0].insertId });

  } catch (e) {
    console.error(e);
  }

});

module.exports = router;
