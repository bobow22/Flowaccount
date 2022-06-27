import React, { useState } from 'react'
import '../Component/Cash_invoice.css';
import { SiVerizon } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Cash_invoice() {
    
    //----------------- 1 -----------------//
    const [quantity1, setQuantity1] = useState();
    const [price1, setPrice1] = useState();
    const [amount1, setAmount1] = useState();

    //----------------- 2 -----------------//
    const [quantity2, setQuantity2] = useState();
    const [price2, setPrice2] = useState();
    const [amount2, setAmount2] = useState();

    //----------------- 3 -----------------//
    const [quantity3, setQuantity3] = useState();
    const [price3, setPrice3] = useState();
    const [amount3, setAmount3] = useState();

    //----------------- 4 -----------------//
    const [quantity4, setQuantity4] = useState();
    const [price4, setPrice4] = useState();
    const [amount4, setAmount4] = useState();

    //----------------- Sum -----------------//
    const [sum, setSum] = useState();

    //----------------- Discount -----------------//
    const [numberdiscount, setNumberdiscount] = useState();
    const [displayDiscount, setDisplayDiscount] = useState();
    const [discount, setDiscount] = useState();

    //----------------- Tax -----------------//
    const [tax, setTax] = useState();

    //----------------- Net Total -----------------//
    const [netTotal, setNetTotal] = useState();

    //----------------- useEffect -----------------//

    useEffect(() => {
        //1
        setAmount1(parseFloat(quantity1) * parseFloat(price1)) //amount1
        //2
        setAmount2(parseFloat(quantity2) * parseFloat(price2)) //amount2
        //3
        setAmount3(parseFloat(quantity3) * parseFloat(price3)) //amount3
        //4
        setAmount4(parseFloat(quantity4) * parseFloat(price4)) //amount4
        //Sum
        setSum(parseFloat(amount1) + parseFloat(amount2) + parseFloat(amount3) + parseFloat(amount4)) //Sum
        //Discount
        setDiscount(parseFloat(sum) - parseFloat(sum) * parseFloat(numberdiscount/100)) //Discount
        //Display Discount
        setDisplayDiscount(parseFloat(sum) * parseFloat(numberdiscount/100)) //Display Discount
        //Tax
        setTax(parseFloat(sum) - parseFloat(sum) * parseFloat(numberdiscount/100) *7/100) //Tax
        //Net Total
        setNetTotal(parseFloat(sum) - parseFloat(sum) * parseFloat(numberdiscount/100) + parseFloat(sum) - parseFloat(sum) * parseFloat(numberdiscount/100))//Discount

    }, [price1, price2, price3, price4, amount1, amount2, amount3, amount4, quantity1, quantity2, quantity3, quantity4, sum, numberdiscount, discount, tax, netTotal])
    

  return (<>

    {/* -----------------------------------------Header----------------------------------------------- */}
    <div className="Header">

        <img className='Heade_img' src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />


        <h1>สร้างใบเสร็จรับเงิน</h1>

        <div className="Btn_Header">
          <button type="primary" htmlType="submit" className="button-65">
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://flowaccount.com/"
            >
              ทดลองใช้งานฟรี
            </a>
          </button>

          <button type="primary" htmlType="submit" className="button-65">
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://auth.flowaccount.com/"
            >
              ลงชื่อเข้าใช้งาน
            </a>
          </button>
        </div>
      </div>

      {/* -----------------------------------------Content----------------------------------------------- */}
      <div className="Content">
        <div className="Btn_and_PDF">
          <div className="Btn_Content">
            <button type="submit" className="button-1">
              ส่ง
            </button>
            <button type="submit" className="button-2">
              บันทึก
            </button>
            <button type="submit" className="button-2">
              รับ PDF
            </button>
            <button type="submit" className="button-2">
              พิมพ์
            </button>
          </div>

          <div className="PDF" style={{ marginTop: "25px" }}>
            {/* <img src='https://edit.org/images/cat/invoices-big-2019042509.jpg'/> */}
            <div className="receipt">
              <h3>ใบเสร็จรับเงิน</h3>

              <div
                className="my_company"
                style={{ fontSize: "13px", textAlign: "left" }}
              >
                <div>
                  <p>
                    ชื่อบริษัท: <input type="text" />
                    <span>
                      <br />
                      ชื่อ: <input type="text" />
                    </span>
                    <span>
                      <br />
                      ที่อยู่: <input type="text" />
                    </span>
                    <span>
                      <br />
                      เลขประจำตัวผู้เสียภาษี: <input type="text" />
                    </span>
                  </p>
                </div>


                <div className="PDF" style={{marginTop: '25px'}}>

                    {/* <img src='https://edit.org/images/cat/invoices-big-2019042509.jpg'/> */}
                    <div className="receipt">
                        <h3>ใบเสร็จรับเงิน</h3>

                        
                        <div className='my_company' style={{fontSize: '13px',textAlign: 'left'}}>

                            <div>
                                <p>ชื่อบริษัท: <input type="text" placeholder="ตัวอย่าง บริษัท ขายดี จำกัด" />
                                    <span><br/>ชื่อ:  <input type="text"placeholder="ตัวอย่าง นาย เฮง ทำมาค้าขึ้น"/></span>
                                    <span><br/>ที่อยู่: <input type="text" placeholder="ตัวอย่าง 234 ซอย สุขุมวิท 21 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 "/></span>
                                    <span><br/>เลขประจำตัวผู้เสียภาษี: <input type="text" placeholder="0000000000000"/></span>
                                </p>
                            </div>
                            
                            <div>
                                <p>วันที่: <input type="date" id="dt"/>
                                    <span><br/>ผู้ขาย: <input type="text" placeholder="เฮง เฮง"/></span>
                                    <span><br/>ครบกำหนด: <input type="date" id="dt"/></span>
                                </p>
                            </div>

                        </div>
                        

                        <div className='customer_company' style={{fontSize: '13px', textAlign: 'left'}}>
                            <p>ชื่อบริษัทลูกค้า: <input type="text" placeholder="ตัวอย่าง บริษัท ชอบซื้อ จำกัด"/>
                                <span><br/>ชื่อลูกค้า: <input type="text" placeholder="ตัวอย่าง นาย รักดี รักมั่น"/></span>
                                <span><br/>ที่อยู่ลูกค้า: <input type="text" placeholder="ตัวอย่าง 123 ถนนสุรวงศ์ แขวงสุริยวงศ เขตบางรัก กรุงเทพ 10500"/></span>
                                <span><br/>เลขประจำตัวผู้เสียภาษี: <input type="text" placeholder="1234567891234"/></span>
                            </p>
                        </div>

                        <div className="description" style={{fontSize: '13px'}}>
                            <strong>ชื่องาน:</strong>

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>ชื่อสินค้า/รายละเอียด</th>
                                        <th>จำนวน</th>
                                        <th>หน่วย</th>
                                        <th>ราคาต่อหน่วย</th>
                                        <th>ราคารวม</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="1"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="float" placeholder="1" value={quantity1} onChange={(e) => setQuantity1(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td><input type="float" placeholder="100.00" value={price1} onChange={(e) => setPrice1(e.target.value)}/></td>
                                        <td><p>{amount1}</p></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="1"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="float" placeholder="1" value={quantity2} onChange={(e) => setQuantity2(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td><input type="float" placeholder="100.00" value={price2} onChange={(e) => setPrice2(e.target.value)}/></td>
                                        <td><p>{amount2}</p></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="1"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="float" placeholder="1" value={quantity3} onChange={(e) => setQuantity3(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td><input type="float" placeholder="100.00" value={price3} onChange={(e) => setPrice3(e.target.value)}/></td>
                                        <td><p>{amount3}</p></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="1"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="float" placeholder="1" value={quantity4} onChange={(e) => setQuantity4(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td><input type="float" placeholder="100.00" value={price4} onChange={(e) => setPrice4(e.target.value)}/></td>
                                        <td><p>{amount4}</p></td>
                                    </tr>

                                    <tr>
                                        <button className='buttonAdd' type="button"><a style={{color: "black"}} href="https://sandbox-new.flowaccount.com/N732809/business/receipts">+เพิ่มแถวรายการ</a></button>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className='summary' style={{fontSize: '13px'}}>
                            <p>รวมเป็นเงิน:  <span className='result'><td><input type="float" placeholder="100.00" value={sum}/></td></span>
                                <span><br/>ส่วนลด <input style={{width: '5%'}} type="float" placeholder="5" value={numberdiscount} onChange={(e) => setNumberdiscount(e.target.value)}/>%</span>         
                                    <span className='result1'><td><input type="text" value={displayDiscount}/></td></span>
                                
                                <span><br/>ราคาหลังหักส่วนลด</span>   
                                    <span className='result2'><td><input type="float" placeholder="95.00" value={discount}/></td></span>
                                
                                <span><br/>ภาษีมูลค่าเพิ่ม 7%</span>    
                                    {/* <span className='result3'><td><input type="float" placeholder="6.65" value={tax}/></td></span> */}
                                    <span className='result3'><td><p placeholder="6.65">{tax}</p></td></span>
                                
                                <span><br/>จำนวนเงินรวมทั้งสิ้น</span>   
                                    <span className='result4'><td><input type="float" placeholder="101.65" value={netTotal}/></td></span>
                            </p>
                        </div>
                        
                        
                        <div className='PDF_img_footer' >
                            <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                        </div>


                    </div>
                 
                </div>
              </div>

              <div
                className="customer_company"
                style={{ fontSize: "13px", textAlign: "left" }}
              >
                <p>
                  ชื่อบริษัทลูกค้า: <input type="text" />
                  <span>
                    <br />
                    ชื่อลูกค้า: <input type="text" />
                  </span>
                  <span>
                    <br />
                    ที่อยู่ลูกค้า: <input type="text" />
                  </span>
                  <span>
                    <br />
                    เลขประจำตัวผู้เสียภาษี: <input type="text" />
                  </span>
                </p>
              </div>

              <div className="description" style={{ fontSize: "13px" }}>
                <strong>ชื่องาน:</strong>

                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>ลำดับ</th>
                      <th>ชื่อสินค้า/รายละเอียด</th>
                      <th>จำนวน</th>
                      <th>หน่วย</th>
                      <th>ราคาต่อหน่วย</th>
                      <th>ราคารวม</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="1"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" />
                      </td>
                      <td>
                        <input type="text" placeholder="ชิ้น" />
                      </td>
                      <td>
                        <input type="text" placeholder="100.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="100.00" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="2"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" />
                      </td>
                      <td>
                        <input type="text" placeholder="ตัว" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="3"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" />
                      </td>
                      <td>
                        <input type="text" placeholder="ตัว" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="4"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" />
                      </td>
                      <td>
                        <input type="text" placeholder="ตัว" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" />
                      </td>
                    </tr>

                    <tr>
                      <button className="buttonAdd" type="button">
                        <a
                          style={{ color: "black" }}
                          href="https://sandbox-new.flowaccount.com/N732809/business/receipts"
                        >
                          +เพิ่มแถวรายการ
                        </a>
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="summary" style={{ fontSize: "13px" }}>
                <p>
                  รวมเป็นเงิน:{" "}
                  <span className="result">
                    <td>
                      <input type="text" placeholder="100.00" />
                    </td>
                  </span>
                  <span>
                    <br />
                    ส่วนลด{" "}
                    <input
                      style={{ width: "5%" }}
                      type="text"
                      placeholder="5"
                    />
                    %
                  </span>
                  <span className="result1">
                    <td>
                      <input type="text" placeholder="5.00" />
                    </td>
                  </span>
                  <span>
                    <br />
                    ราคาหลังหักส่วนลด
                  </span>
                  <span className="result2">
                    <td>
                      <input type="text" placeholder="95.00" />
                    </td>
                  </span>
                  <span>
                    <br />
                    ภาษีมูลค่าเพิ่ม 7%
                  </span>
                  <span className="result3">
                    <td>
                      <input type="text" placeholder="6.65" />
                    </td>
                  </span>
                  <span>
                    <br />
                    จำนวนเงินรวมทั้งสิ้น
                  </span>
                  <span className="result4">
                    <td>
                      <input type="text" placeholder="101.65" />
                    </td>
                  </span>
                </p>
              </div>

              <div className="PDF_img_footer">
                <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="Text_explain_procedure">
          <h2>ใส่ข้อมูลใบเสร็จรับเงิน</h2>
          <p>
            <SiVerizon />
            <span>เพิ่มที่อยู่ลูกค้าของคุณ</span>
          </p>
          <p>
            <SiVerizon />
            <span>เพิ่มหมายเลขใบเสร็จรับเงิน</span>
          </p>
          <p>
            <SiVerizon />
            <span>เพิ่มข้อมูลสินค้า</span>
          </p>
          <p>
            <SiVerizon />
            <span>พิมพ์ใบเสร็จรับเงิน</span>
          </p>
        </div>
      </div>

      {/* -----------------------------------------Footer----------------------------------------------- */}
      <div className="Footer">
        <div className="Sub_Footer">
          <h2>ทดลองใช้โปรเเกรมบัญชี FlowAccount</h2>

          <div className="Btn_Footer">
            <button type="primary" htmlType="submit" className="button-65">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://auth.flowaccount.com/th/Account/Register"
              >
                สมัครใช้งาน
              </a>
            </button>

            <button type="primary" htmlType="submit" className="button-65">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://flowaccount.com/"
              >
                ติดต่อเรา
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
