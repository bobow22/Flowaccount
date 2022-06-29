import '../Login & Register/Login.css';
import React, { useState } from "react";
// import axios from 'axios';




export default function Login() {

    //-----------onFinish---------------
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFinish = async (e) => {
        e.preventDefault()

        console.log(
            'Email:',email,
            '\nPassword:',password
            )
        }


  return (<>
    {/* --------------------Form Login----------------- */}

    {/* <div className="download">
        <div className="download_logo">
            <img src="https://yt3.ggpht.com/ytc/AKedOLR7cAY0PMWykv9qnD0byzz19CfsRuBgBZxKrRkVKw=s900-c-k-c0x00ffffff-no-rj" />
            {/* <p>FlowAccount<br/><span>ดาวน์โหลดฟรีได้แล้ววันนี้</span></p> 
        </div>

        {/* <div style={{border:'1px solid red'}}>
            
        </div>        */} {/*
        <button>ดาวน์โหลด</button>
    </div> */}


    <div className="Container">
        <div className="Form_Login">
            <div className="image_header">
                <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                <h2>ล็อกอินเข้าสู่ระบบ</h2>
            </div>
          
            <div className='Form'>
                    <span style={{textAlign: 'left'}}>อีเมล</span><br/>

                    <input style={{marginBottom: '1.5rem'}} onChange={e=>setEmail(e.target.value)} className='form__input' placeholder="name@example.com"/>

                    <br/><span>รหัสผ่าน</span>

                    <input className='form__input' placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร" onChange={e=>setPassword(e.target.value)}/>

                    <button type="primary" htmlType="submit" className="button-37" style={{marginTop: '2rem', marginBottom: '1.5rem'}} onClick={onFinish}>
                            เข้าสู่ระบบ
                    </button>

                    <div className="form_text" style={{marginBottom: '25px'}}>                            <p>ยังไม่มีบัญชีกับเรา? <span>สมัครใช้งานฟรี</span></p>
                    </div>
                    <hr style={{color: 'rgb(173, 173, 173)'}}/>

                    <div className="form_text" style={{marginTop: '25px'}}>
                        <p>หรือเข้าสู่ระบบโดยล็อกอินผ่าน</p>
                    </div>    

                    <div class="animate-bottom">
                        <button class="loginBtn loginBtn--facebook">
                            Log in With Facebook
                        </button>
                        <button class="loginBtn loginBtn--google">
                            Sign in with Google
                        </button>
                    </div>

                    <div className="form_text_Encryption">                                
                        <p>256 bit SSL Encryption</p>
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

