import React, { useState } from 'react'
import '../Component/Cash_invoice.css';
import { SiVerizon } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


export default function Cash_invoice() {

    //-----------------------------------Form validation----------------------------------------//
    const [CompanyCustomer_name, setCompanyCustomer_name] = useState('')
    const [customer_name, setCustomer_name] = useState('')
    const [Customer_address, setCustomer_address] = useState('')
    const [Tax_Number, setTax_Number] = useState('')
    

    const [ItemName_1, setItemName_1] = useState('')
    const [ItemName_2, setItemName_2] = useState('')
    const [ItemName_3, setItemName_3] = useState('')
    const [ItemName_4, setItemName_4] = useState('')


    const [error, setError] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      //--------------Error 
      if(customer_name.length === 0 || CompanyCustomer_name.length === 0 || Customer_address.length === 0 || Tax_Number.length != 13){

        setError(true)

      }

      if(ItemName_1.length === 0 || ItemName_2.length === 0 || ItemName_3.length === 0 || ItemName_4.length === 0){
        setError(true)
      }

      //------------Success
      if(customer_name){
        console.log(
          'CompanyCustomer name:', CompanyCustomer_name,
          '\nCustomer name:',customer_name,
          '\nCustomer address:', Customer_address,
          '\mTax Number:', Tax_Number,
          '\nItem Name 1:', ItemName_1,
          '\nItem Name 2:', ItemName_2,
          '\nItem Name 3:', ItemName_3,
          '\nItem Name 4:', ItemName_4,

        )
      }
    }
  
    
    //----------------- 1 -----------------//
    const [quantity1, setQuantity1] = useState(0);
    const [price1, setPrice1] = useState(0);
    const [amount1, setAmount1] = useState(0);

    //----------------- 2 -----------------//
    const [quantity2, setQuantity2] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [amount2, setAmount2] = useState(0);

    //----------------- 3 -----------------//
    const [quantity3, setQuantity3] = useState(0);
    const [price3, setPrice3] = useState(0);
    const [amount3, setAmount3] = useState(0);

    //----------------- 4 -----------------//
    const [quantity4, setQuantity4] = useState(0);
    const [price4, setPrice4] = useState(0);
    const [amount4, setAmount4] = useState(0);

    //----------------- Sum -----------------//
    const [sum, setSum] = useState(0);

    //----------------- Discount -----------------//
    const [numberdiscount, setNumberdiscount] = useState(0);
    const [displayDiscount, setDisplayDiscount] = useState(0);
    const [discount, setDiscount] = useState(0);

    //----------------- Tax -----------------//
    const [tax, setTax] = useState(0);


    //----------------- Net Total -----------------//
    const [netTotal, setNetTotal] = useState(0);


    //----------------- useEffect -----------------//
    useEffect(() => {
        //1
        setAmount1(parseFloat(quantity1, 10) * parseFloat(price1, 10)) //amount1
        //2
        setAmount2(parseFloat(quantity2, 10) * parseFloat(price2, 10)) //amount2
        //3
        setAmount3(parseFloat(quantity3, 10) * parseFloat(price3, 10)) //amount3
        //4
        setAmount4(parseFloat(quantity4, 10) * parseFloat(price4, 10)) //amount4

        //Sum
        setSum(parseFloat(amount1, 10) + parseFloat(amount2, 10) + parseFloat(amount3, 10) + parseFloat(amount4, 10))

        //Discount
        setDiscount(parseFloat(sum, 10) - parseFloat(sum, 10) * parseFloat(numberdiscount/100)) //Discount
        
        //Display Discount
        setDisplayDiscount(parseFloat(sum, 10) * parseFloat(numberdiscount/100)) //Display Discount

        //Tax
        setTax(parseFloat(discount, 10)* 7/100) //Tax
        
        //Net Total
        setNetTotal(parseFloat(discount, 10) + (parseFloat(discount, 10)* 7/100))//Discount

    }, [price1, price2, price3, price4, amount1, amount2, amount3, amount4, quantity1, quantity2, quantity3, quantity4, sum, numberdiscount, discount, tax, netTotal,displayDiscount])
    

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

            {/* -------------Submit------------- */}
            <button id='form' type="submit" className="button-1" onClick={handleSubmit}>
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


          {/*---------------------------------- PDF --------------------------------- */}

          <div className="PDF" style={{marginTop: '25px'}}>

                    <div className="receipt">
                        <h3>ใบเสร็จรับเงิน</h3>

                        <div className='my_company' style={{fontSize: '13px',textAlign: 'left'}}>

                            <div>
                                <p>ชื่อบริษัท: <input type="text" placeholder="ตัวอย่าง บริษัท ขายดี จำกัด" />
                                    <span><br/>ชื่อ:  <input type="text"placeholder="ตัวอย่าง นาย เฮง ทำมาค้าขึ้น"/></span>
                                    <span className="Address"><br/>ที่อยู่: <input type="text" placeholder="ตัวอย่าง 234 ซอย สุขุมวิท 21   แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 "/></span>
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
                            <p>ชื่อบริษัทลูกค้า: 
                              
                            <input id="customer_name" type="text" placeholder="ตัวอย่าง บริษัท ชอบซื้อ จำกัด" onChange={e =>setCompanyCustomer_name(e.target.value)}/>

                            {/* ---------------error: customer_name---------------- */}
                            {error && CompanyCustomer_name.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อบริษัทลูกค้า</label>: ''}


                                <span><br/>ชื่อลูกค้า: 
                                  <input type="text" placeholder="ตัวอย่าง นาย รักดี รักมั่น" onChange={e =>setCustomer_name(e.target.value)}/>
                                  {error && customer_name.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อลูกค้า</label>: ''}
                                </span>


                                <span><br/>ที่อยู่ลูกค้า: 
                                  <input type="text" placeholder="ตัวอย่าง 123 ถนนสุรวงศ์ แขวงสุริยวงศ เขตบางรัก กรุงเทพ 10500" onChange={e=>setCustomer_address(e.target.value)}/>
                                  {error && Customer_address.length <=0? <label style={{color: 'red'}}>กรุณากรอกที่อยู่ลูกค้า</label>: ''}
                                </span>

                                <span><br/>เลขประจำตัวผู้เสียภาษี: 
                                  <input type="text" placeholder="1234567891234" onChange={e=>setTax_Number(e.target.value)}/>
                                  {error && Tax_Number.length != 13? <label style={{color: 'red'}}>กรุณากรอกเลขประจำตัวผู้เสียภาษีให้ครบ</label>: ''}
                                </span>
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
                                        
                                        {/* ---------------error: Name_item_1---------------- */}
                                        <td class="Name_item">                         
                                          <input style={{textAlign: "center"}} type="text" placeholder="ชื่อสินค้า" onChange={e=>setItemName_1(e.target.value)}/>
                                          {error && ItemName_1.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อสินค้า</label>: ''}
                                        </td>

                                        <td><input type="float" placeholder="1" value={quantity1} onChange={(e) => setQuantity1(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td class="Name_item"><input type="float" placeholder="100.00" value={price1} onChange={(e) => setPrice1(e.target.value)}/></td>
                                        <td><p>{amount1.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></td>
                                    </tr>


                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="2"/></td>
                                        
                                        {/* ---------------error: Name_item_2---------------- */}
                                        <td class="Name_item">
                                          <input style={{textAlign: "center"}} type="text" placeholder="ชื่อสินค้า" onChange={e=>setItemName_2(e.target.value)}/>
                                         
                                          {error && ItemName_2.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อสินค้า</label>: ''}
                                        </td>


                                        <td><input type="float" placeholder="1" value={quantity2} onChange={(e) => setQuantity2(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td class="Name_item"><input type="float" placeholder="100.00" value={price2} onChange={(e) => setPrice2(e.target.value)}/></td>
                                        <td><p>{amount2.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="3"/></td>
                                        
                                        {/* ---------------error: Name_item_3---------------- */}
                                        <td class="Name_item">
                                          <input style={{textAlign: "center"}} type="text" placeholder="ชื่อสินค้า" onChange={e=>setItemName_3(e.target.value)}/>
                                          {error && ItemName_3.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อสินค้า</label>: ''}
                                        </td>

                                        <td><input type="float" placeholder="1" value={quantity3} onChange={(e) => setQuantity3(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td class="Name_item"><input type="float" placeholder="100.00" value={price3} onChange={(e) => setPrice3(e.target.value)}/></td>
                                        <td><p>{amount3.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="float" placeholder="4"/></td>
                                        
                                        {/* ---------------error: Name_item_4---------------- */}
                                        <td class="Name_item">
                                          <input style={{textAlign: "center"}} type="text" placeholder="ชื่อสินค้า" onChange={e=>setItemName_4(e.target.value)}/>
                                          {error && ItemName_4.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อสินค้า</label>: ''}

                                        </td>
                                        <td><input type="float" placeholder="1" value={quantity4} onChange={(e) => setQuantity4(e.target.value)}/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td class="Name_item"><input type="float" placeholder="100.00" value={price4} onChange={(e) => setPrice4(e.target.value)}/></td>
                                        <td><p>{amount4.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></td>
                                    </tr>

                                    <tr>
                                        <button className='buttonAdd' type="button"><a style={{color: "black"}} href="https://sandbox-new.flowaccount.com/N732809/business/receipts">+เพิ่มแถวรายการ</a></button>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        {/* --------------------------Summary---------------------------------- */}
                
                        <div className='summary' style={{fontSize: '13px'}}>
                          
                            <p>
                              <span>รวมเป็นเงิน:</span>  <span className='result'><td>{sum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td></span>

                                <span className='discount'><br/>ส่วนลด 
                                  <input style={{width: '8.5%'}} type="float" placeholder="5" value={numberdiscount} onChange={(e) => setNumberdiscount(e.target.value)}/>%
                                </span>         
                                
                                <span className='result1'><td>{displayDiscount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td></span>
                                
                                <span><br/>ราคาหลังหักส่วนลด</span>   
                                    <span className='result2'><td>{discount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td></span>
                                
                                <span><br/>ภาษีมูลค่าเพิ่ม 7%</span>    
                                 
                                    <span className='result3'><td>{tax.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td></span>
                                
                                <span><br/>จำนวนเงินรวมทั้งสิ้น</span>   
                                    <span className='result4'><td>{netTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td></span>
                            </p>
                        </div>
                        
                        
                        <div className='PDF_img_footer' >
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
  )
}

