import React from 'react'
import { Button } from 'antd';
import '../Component/Cash_invoice.css';
import { SiVerizon } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cash_invoice() {



  return (<>
    <div className="Header">
        <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
        <h1>สร้างใบเสร็จรับเงิน</h1>
        
        <div className="Btn_Header">
            <Button type="primary" htmlType="submit" className='button-65'>ทดลองใช้งานฟรี</Button>
            <Button type="primary" htmlType="submit" className='button-65'>ลงชื่อเข้าใช้งาน</Button>
        </div>
    </div>


    <div className="Content">
            <div className="Btn_and_PDF">

                <div className='Btn_Content'>
                    <Button type="primary" htmlType="submit"  className='button-65'>ส่ง</Button>
                    <Button type="primary" htmlType="submit"  className='button-65'>บันทึก</Button>
                    <Button type="primary" htmlType="submit"  className='button-65'>รับ PDF</Button>
                    <Button type="primary" htmlType="submit"  className='button-65'>พิมพ์</Button>
                </div>



                <div className="PDF">

                    {/* <img src='https://edit.org/images/cat/invoices-big-2019042509.jpg'/> */}
                    <div className="receipt">
                        <h3>ใบเสร็จรับเงิน</h3>

                        
                        <div className='my_company'>
                            <p>ชื่อบริษัท:
                                <span><br/>ชื่อ:</span>
                                <span><br/>ที่อยู่:</span>
                                <span><br/>เลขประจำตัวผู้เสียภาษี:</span>
                            </p>

                            <p>วันที่:
                                <span><br/>เลขที่:</span>
                                <span><br/>ผู้ขาย:</span>
                                <span><br/>ครบกำหนด:</span>
                            </p>
                        </div>
                        

                        <div className='customer_company'>
                            <p>ชื่อบริษัทลูกค้า:
                                <span><br/>ชื่อลูกค้า:</span>
                                <span><br/>ที่อยู่ลูกค้า:</span>
                                <span><br/>เลขประจำตัวผู้เสียภาษี:</span>
                            </p>
                        </div>

                        <div className="description">
                            <p>ชื่องาน:</p>

                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>ชื่อสินค้า/รายละเอียด</th>
                                        <th>จำนวน</th>
                                        <th>หน่วย</th>
                                        <th>ราคาต่อหร่วย</th>
                                        <th>ราคารวม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ชื่อสินค้า</td>
                                        <td>1</td>
                                        <td>ชิ้น</td>
                                        <td>100.00</td>
                                        <td>100.00</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>ชื่อสินค้า</td>
                                        <td>1</td>
                                        <td>ชิ้น</td>
                                        <td>100.00</td>
                                        <td>100.00</td>
                                    </tr>

                                    <tr>
                                        <td>+ เพิ่มแถวรายการ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className='summary'>
                            <p>รวมเป็นเงิน:   <span className='result'>105</span>
                                <span><br/>ส่วนลด 5%</span>         <span className='result'>105</span>
                                <span><br/>ราคาหลังหักส่วนลด</span>   <span className='result'>105</span>
                                <span><br/>ภาษีมูลค่าเพิ่ม 7%</span>    <span className='result'>105</span>
                                <span><br/>จำนวนเงินรวมทั้งสิ้น</span>   <span className='result'>10,500.00</span>
                            </p>
                        </div>
                        
                        
                        <div className='PDF_img_footer'>
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

    <div className='Footer'>
        <div className='Sub_Footer'>
            <h2>ทดลองใช้โปรเเกรมบัญชี FlowAccount</h2>

            <div className='Btn_Footer'>
                <Button type="primary" htmlType="submit" className='button-65'>สมัครใช้งาน</Button>
                <Button type="primary" htmlType="submit" className='button-65'>ติดต่อเรา</Button>
            </div>
        </div>
    </div>
    
    </>)
}
