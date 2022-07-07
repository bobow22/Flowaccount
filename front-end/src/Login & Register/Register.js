import React, { useState } from "react";
import '../Login & Register/Register.css'
// import axios from 'axios';


export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    //-----------onFinish---------------
    const onFinish = async (e) => {

        e.preventDefault()

        console.log('email:', email,
            '\npassword:', password,
            '\nphone:', phone,
        )
    }


    return (<>
        {/* --------------------Form Register----------------- */}
        <div className="Container_Register">
            <div className="Form_Register">
                <div className="Logo">
                    <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                    <h3>สมัครใช้งานฟรี!</h3>
                    <span>ใช้งานได้ครบทุกฟังก์ชั่น <span>ไม่ต้องใช้บัตรเครดิต</span></span>
                </div>

                <div className='Conten_in_from'>
                    <span style={{ textAlign: 'left' }}>อีเมล*</span><br />

                    <input style={{ marginBottom: '1.5rem' }} className='input_email' placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />

                    <br /><span>รหัสผ่าน*</span>
                    <br /><input type="password" className='input_pass' placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร" onChange={e => setPassword(e.target.value)} />
                    <p class="limit_pass"></p>
                    <p className='password_rule'>รหัสผ่านควรมีทั้งตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน</p>


                    <br /><span>เบอร์ของผู้สมัครใช้งาน*</span>
                    <br /><input className='input_phone' placeholder="09XXXXXXXX" onChange={e => setPhone(e.target.value)} />

                    <div className="text_above_button">
                        <h4>ในการสมัครใช้งาน <span>ฉันได้ยอมรับ</span></h4>
                        <h5>ประกาศความเป็นส่วนตัวสําหรับลูกค้าและผู้รับบริการ <span>และ</span> เงื่อนไขการใช้บริการ</ h5>
                    </div>


                    <button type="primary" htmlType="submit" className="button-3" style={{ marginTop: '0.7rem' }} onClick={onFinish}>
                        ทดลองใช้งานฟรี
                    </button>

                    <div className="text_below_button" style={{ marginTop: '25px' }}>
                        <p>มีบัญชีกับเราแล้ว? <span>ล๊อกอินเข้าสู้ระบบ</span></p>
                    </div>

                    <hr style={{ color: 'rgb(173, 173, 173)' }} />

                    <div className="text_above_FB_GL" style={{ marginTop: '25px' }}>
                        <p>หรือสมัครโดยใช้บัญชีอื่นๆ</p>
                    </div>

                    <div class="animate-bottom">
                        <button class="loginBtn loginBtn--facebook" >
                            <a href="http://localhost:3000/auth/facebook" style={{ color: "white", textDecoration: "none" }}>Log in With Facebook</a>
                        </button>

                        <button class="loginBtn loginBtn--google">
                            <a href="http://localhost:3000/auth/google" style={{ color: "white", textDecoration: "none" }}>Log in With Google</a>
                        </button>

                    </div>
                </div>

            </div>

            <div className='FlowAccount_Co'>
                <p>2014-2022 © FlowAccount Co., Ltd. All Right Reserved <span>Terms of Service</span><span >Privacy Policy</span></p>
            </div>

        </div>

    </>
    )
}