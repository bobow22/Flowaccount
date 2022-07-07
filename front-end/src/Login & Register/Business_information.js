import React from 'react'
import './Business_information.css'
export default function Business_information() {
  return (<>
    <div className="Container_BusinessInformation">

        <div className="Form_BusinessInformation">
            
            <div className="Logo_BusinessInformation">
                <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                <h3>ยินดีด้วยเราได้สร้างบริษัทให้คุณเรียบร้อยแล้ว</h3>
                <span>เพื่อการใช้งานที่ครบถ้วนสมบูรณ์ กรุณาให้ข้อมูลเพิมเติม</span>
            </div>

            <h4>ข้อมูลผู้สมัครใช้งาน</h4>

            <div className='row_Firstname_ane_LastName'>
                <div className='Firstname'>   
                    <span style={{ textAlign: 'left' }}>ชื่อ*</span><br/>
                    <input/>
                </div>
                <div className='LastName'>   
                    <span style={{ textAlign: 'left' }}>นามสกุล*</span><br/>
                    <input/>
                </div>
            </div>

            <h4>ข้อมูลทางธุรกิจ</h4>
            
            <div className='row_CompanyInformation'>
                <div className='company_name'>   
                    <span style={{ textAlign: 'left' }}>ชื่อธุรกิจ*</span><br/>
                    <input placeholder="ใส่ชื่อธุรกิจเพื่อแสดงบนหน้าเอกสาร"/>
                </div>
                <div className='company_address'>   
                    <span style={{ textAlign: 'left' }}>ที่อยู่*</span><br/>
                    <input placeholder="ที่อยู่สำหรับติดต่อธุรกิจ"/>
                </div>
            </div>

            <div className='tax_number'>
                <span style={{ textAlign: 'left' }}>เลขประจำตัวผู้เสียภาษี*</span><br/>
                <input placeholder="14XXXXXXXXXXX"/>
            </div>


            <div className='Btn_BusinessInformation'>
                <button type="primary" htmlType="submit" className="button-4" style={{ marginTop: '1.8rem'}}>
                    เริ่มต้นใช้งาน
                </button>
            </div>
            
        </div>   

    </div>
    </>
  )
}
