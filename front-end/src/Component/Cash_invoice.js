import React from 'react'
import '../Component/Cash_invoice.css';
import { SiVerizon } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cash_invoice() {



  return (<>

    {/* -----------------------------------------Header----------------------------------------------- */}
    <div className="Header">

        <img className='Heade_img' src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />


        <h1>สร้างใบเสร็จรับเงิน</h1>
        
        <div className="Btn_Header">
            <button type="primary" htmlType="submit" className='button-65'><a style={{color: 'white', textDecoration: 'none'}} href="https://flowaccount.com/">ทดลองใช้งานฟรี</a></button>

            <button type="primary" htmlType="submit" className='button-65'><a style={{color: 'white', textDecoration: 'none'}} href="https://auth.flowaccount.com/">ลงชื่อเข้าใช้งาน</a></button>
        </div>
    </div>



    {/* -----------------------------------------Content----------------------------------------------- */}
    <div className="Content">
            <div className="Btn_and_PDF">

                <div className='Btn_Content'>
                    <button type="submit" className='button-1'>ส่ง</button>
                    <button type="submit" className='button-2'>บันทึก</button>
                    <button type="submit" className='button-2'>รับ PDF</button>
                    <button type="submit" className='button-2'>พิมพ์</button>
                </div>


                <div className="PDF" style={{marginTop: '25px'}}>

                    {/* <img src='https://edit.org/images/cat/invoices-big-2019042509.jpg'/> */}
                    <div className="receipt">
                        <h3>ใบเสร็จรับเงิน</h3>

                        
                        <div className='my_company' style={{fontSize: '13px',textAlign: 'left'}}>

                            <div>
                                <p>ชื่อบริษัท: <input type="text" />
                                    <span><br/>ชื่อ:  <input type="text" /></span>
                                    <span><br/>ที่อยู่: <input type="text" /></span>
                                    <span><br/>เลขประจำตัวผู้เสียภาษี: <input type="text" /></span>
                                </p>
                            </div>
                            
                            <div>
                                <p>วันที่: <input type="date" id="dt"/>
                                    <span><br/>ผู้ขาย: <input type="text" /></span>
                                    <span><br/>ครบกำหนด: <input type="text" /></span>
                                </p>
                            </div>

                        </div>
                        

                        <div className='customer_company' style={{fontSize: '13px', textAlign: 'left'}}>
                            <p>ชื่อบริษัทลูกค้า: <input type="text" />
                                <span><br/>ชื่อลูกค้า: <input type="text" /></span>
                                <span><br/>ที่อยู่ลูกค้า: <input type="text" /></span>
                                <span><br/>เลขประจำตัวผู้เสียภาษี: <input type="text" /></span>
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
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="1"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="text" placeholder="1"/></td>
                                        <td><input type="text" placeholder="ชิ้น"/></td>
                                        <td><input type="text" placeholder="100.00"/></td>
                                        <td><input type="text" placeholder="100.00"/></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="2"/></td>
                                        <td><input style={{textAlign: "left"}}type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="text" placeholder="1"/></td>
                                        <td><input type="text" placeholder="ตัว"/></td>
                                        <td><input type="text" placeholder="0.00"/></td>
                                        <td><input type="text" placeholder="0.00"/></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="3"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="text" placeholder="1"/></td>
                                        <td><input type="text" placeholder="ตัว"/></td>
                                        <td><input type="text" placeholder="0.00"/></td>
                                        <td><input type="text" placeholder="0.00"/></td>
                                    </tr>

                                    <tr>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="4"/></td>
                                        <td><input style={{textAlign: "left"}} type="text" placeholder="ชื่อสินค้า"/></td>
                                        <td><input type="text" placeholder="1"/></td>
                                        <td><input type="text" placeholder="ตัว"/></td>
                                        <td><input type="text" placeholder="0.00"/></td>
                                        <td><input type="text" placeholder="0.00"/></td>
                                    </tr>

                                    <tr>
                                        <button className='buttonAdd' type="button"><a style={{color: "black"}} href="https://sandbox-new.flowaccount.com/N732809/business/receipts">+เพิ่มแถวรายการ</a></button>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className='summary' style={{fontSize: '13px'}}>
                            <p>รวมเป็นเงิน:  <span className='result'><td><input type="text" placeholder="100.00"/></td></span>
                                <span><br/>ส่วนลด <input style={{width: '5%'}} type="text" placeholder="5"/>%</span>         
                                    <span className='result1'><td><input type="text" placeholder="5.00"/></td></span>
                                
                                <span><br/>ราคาหลังหักส่วนลด</span>   
                                    <span className='result2'><td><input type="text" placeholder="95.00"/></td></span>
                                
                                <span><br/>ภาษีมูลค่าเพิ่ม 7%</span>    
                                    <span className='result3'><td><input type="text" placeholder="6.65"/></td></span>
                                
                                <span><br/>จำนวนเงินรวมทั้งสิ้น</span>   
                                    <span className='result4'><td><input type="text" placeholder="101.65"/></td></span>
                            </p>
                        </div>
                        
                        
                        <div className='PDF_img_footer' >
                            <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                        </div>


                    </div>
                 
                </div>
            </div>

            
            <div className='Text_explain_procedure'>
                <h2>ใส่ข้อมูลใบเสร็จรับเงิน</h2>
                <p><SiVerizon /><span>เพิ่มที่อยู่ลูกค้าของคุณ</span></p>
                <p><SiVerizon /><span>เพิ่มหมายเลขใบเสร็จรับเงิน</span></p>
                <p><SiVerizon /><span>เพิ่มข้อมูลสินค้า</span></p>
                <p><SiVerizon /><span>พิมพ์ใบเสร็จรับเงิน</span></p>
            </div>
    </div>



    {/* -----------------------------------------Footer----------------------------------------------- */}
    <div className='Footer'>
        <div className='Sub_Footer'>

            <h2>ทดลองใช้โปรเเกรมบัญชี FlowAccount</h2>

            <div className='Btn_Footer'>
                <button type="primary" htmlType="submit" className='button-65'><a style={{color: 'white', textDecoration: 'none'}} href="https://auth.flowaccount.com/th/Account/Register">สมัครใช้งาน</a></button>

                <button type="primary" htmlType="submit" className='button-65'><a style={{color: 'white', textDecoration: 'none'}} href="https://flowaccount.com/">ติดต่อเรา</a></button>
            </div>

        </div>
    </div>
    
    </>)
}
