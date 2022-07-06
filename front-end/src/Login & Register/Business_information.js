import React from 'react'

export default function Business_information() {
  return (<>
    <div className="Container_BusinessInformation">

        <div className="Form_BusinessInformation">
            
            <h1>ยินดีด้วยเราได้สร้างบริษัทให้คุณเรียบร้อยแล้ว</h1>
            <h2>ข้อมูลผู้สมัครใช้งาน</h2>

            <div style={{display: 'flex'}}>
                <div>   
                    <span style={{ textAlign: 'left' }}>ชื่อ*</span><br/>
                    <input/>
                </div>
                <div>   
                    <span style={{ textAlign: 'left' }}>นามสกุล*</span><br/>
                    <input/>
                </div>
            </div>

            <h2>ข้อมูลทางธุรกิจ</h2>
            <div style={{display: 'flex'}}>
                <div>   
                    <span style={{ textAlign: 'left' }}>ชื่อธุรกิจ*</span><br/>
                    <input/>
                </div>
                <div>   
                    <span style={{ textAlign: 'left' }}>ที่อยู่*</span><br/>
                    <input/>
                </div>
            </div>

            <div>
                <span style={{ textAlign: 'left' }}>เลขประจำตัวผู้เสียภาษี*</span><br/>
                <input/>
            </div>

        </div>

    </div>
    </>
  )
}
