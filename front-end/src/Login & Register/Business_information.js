import React, { useState } from "react";
import './Business_information.css'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Business_information() {

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [company_name, setCompany_name] = useState('')
    const [company_address, setCompany_address] = useState('')
    const [tax_number, setTax_number] = useState('')
    const [error, setError] = useState('')

    const user = useSelector((state) => state.user);
    // const dispatch = useDispatch();

    console.log(user.user.email)

    //-----------onFinish---------------
    const onFinish = async (e) => {
        e.preventDefault()

        setFirstName("");
        setLastName("");
        setCompany_name("");
        setCompany_address("");
        setTax_number("");

        if (firstName.length === 0 || lastName.length === 0 || company_name.length === 0 || company_address.length === 0 || tax_number.length != 13) {
            setError(true)
        } else {
            try {
                await axios.post("http://13.215.205.13:3000/api/users", {
                    username: user.user.email,
                    password: user.user.password,
                    phone_number: user.user.phone,
                    first_name: firstName,
                    last_name: lastName,
                    company_name: company_name,
                    company_address: company_address,
                    tax_id: tax_number
                })
                console.log('FirstName:', firstName,
                    '\nLastName:', lastName,
                    '\nCompanyName:', company_name
                )
                navigate("/");

            } catch (error) {
                console.log('Error:', error)
            }
        }


    }

    return (<>
        {/* <p>{JSON.stringify(user)}</p> */}
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
                        <input value={lastName} onChange={e => setLastName(e.target.value)} />
                        {/* ---------------error: LastName---------------- */}
                        {error && lastName.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณากรอกนามสกุล*</label> : ''}
                    </div>
                </div>

                <h4>ข้อมูลทางธุรกิจ</h4>

                <div className='row_CompanyInformation'>
                    <div className='company_name'>
                        <span style={{ textAlign: 'left' }}>ชื่อธุรกิจ*</span><br />
                        <input placeholder="ใส่ชื่อธุรกิจเพื่อแสดงบนหน้าเอกสาร" value={company_name} onChange={e => setCompany_name(e.target.value)} />
                        {/* ---------------error: Company_name---------------- */}
                        {error && company_name.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณาใส่ชื่อธุรกิจ*</label> : ''}
                    </div>

                    <div className='company_address'>
                        <span style={{ textAlign: 'left' }}>ที่อยู่*</span><br />
                        <input placeholder="ที่อยู่สำหรับติดต่อธุรกิจ" value={company_address} onChange={e => setCompany_address(e.target.value)} />
                        {/* ---------------error: Company_address---------------- */}
                        {error && company_address.length <= 0 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณาใส่ที่อยู่ธุรกิจ*</label> : ''}
                    </div>
                </div>

                <div className='tax_number'>
                    <span style={{ textAlign: 'left' }}>เลขประจำตัวผู้เสียภาษี*</span><br />
                    <input placeholder="14XXXXXXXXXXX" value={tax_number} onChange={e => setTax_number(e.target.value)} />
                    {/* ---------------error: Tax_number---------------- */}
                    {error && tax_number.length != 13 ? <label style={{ color: 'red', marginTop: '0.3rem' }}>กรุณาใส่เลขประจำตัวผู้เสียภาษีให้ครบ 13 หลัก*</label> : ''}
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
