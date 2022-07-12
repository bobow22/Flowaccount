import React, { useState } from "react";
import './Business_information.css'
import { busInfo } from "/Users/zeeracha/Desktop/Flowaccount/front-end/src/Login & Register/features/userSlice.js";
import { useDispatch } from "react-redux";

export default function Business_information() {

    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')

    const [Company_name, setCompany_name] = useState('')
    const [Company_address, setCompany_address] = useState('')
    const [Tax_number, setTax_number] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch();
    //-----------onFinish---------------
    const onFinish = async (e) => {
        e.preventDefault()

        dispatch(
            busInfo({
                firstName: firstName,
                LastName: LastName,
                Company_name: Company_name,
                Company_address: Company_address,
                Tax_number: Tax_number,
            })
        );

        setFirstName("");
        setLastName("");
        setCompany_name("");
        setCompany_address("");
        setTax_number("");

        if (firstName.length === 0 || LastName.length === 0 || Company_name.length === 0 || Company_address.length === 0 || Tax_number.length != 13) {
            setError(true)
        } else {
            console.log('FirstName:', firstName,
                '\nLastName:', LastName,
                '\nCompanyName:', Company_name

            )
        }
    }

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
                        <span style={{ textAlign: 'left' }}>ชื่อ*</span><br />
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
                        {/* ---------------error: FirstName---------------- */}
                        {error && firstName.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณากรอกชื่อ*</label> : ''}
                    </div>

                    <div className='LastName'>
                        <span style={{ textAlign: 'left' }}>นามสกุล*</span><br />
                        <input value={LastName} onChange={e => setLastName(e.target.value)} />
                        {/* ---------------error: LastName---------------- */}
                        {error && LastName.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณากรอกนามสกุล*</label> : ''}
                    </div>
                </div>

                <h4>ข้อมูลทางธุรกิจ</h4>

                <div className='row_CompanyInformation'>
                    <div className='company_name'>
                        <span style={{ textAlign: 'left' }}>ชื่อธุรกิจ*</span><br />
                        <input placeholder="ใส่ชื่อธุรกิจเพื่อแสดงบนหน้าเอกสาร" value={Company_name} onChange={e => setCompany_name(e.target.value)} />
                        {/* ---------------error: Company_name---------------- */}
                        {error && Company_name.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณาใส่ชื่อธุรกิจ*</label> : ''}
                    </div>

                    <div className='company_address'>
                        <span style={{ textAlign: 'left' }}>ที่อยู่*</span><br />
                        <input placeholder="ที่อยู่สำหรับติดต่อธุรกิจ" value={Company_address} onChange={e => setCompany_address(e.target.value)} />
                        {/* ---------------error: Company_address---------------- */}
                        {error && Company_address.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณาใส่ที่อยู่ธุรกิจ*</label> : ''}
                    </div>
                </div>

                <div className='tax_number'>
                    <span style={{ textAlign: 'left' }}>เลขประจำตัวผู้เสียภาษี*</span><br />
                    <input placeholder="14XXXXXXXXXXX" value={Tax_number} onChange={e => setTax_number(e.target.value)} />
                    {/* ---------------error: Tax_number---------------- */}
                    {error && Tax_number.length != 13 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณาใส่เลขประจำตัวผู้เสียภาษีให้ครบ 13 หลัก*</label> : ''}
                </div>


                <div className='Btn_BusinessInformation'>
                    <button type="primary" htmlType="submit" className="button-4" style={{ marginTop: '1.8rem' }} onClick={onFinish}>
                        เริ่มต้นใช้งาน
                    </button>
                </div>

            </div>

        </div>
    </>
    )
}
