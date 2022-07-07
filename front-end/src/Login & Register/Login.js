import '../Login & Register/Login.css';
import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Login() {

    // const signUserIn = async (response) => {
    //     console.log('Res -->', response)
    //     const { name, email, accessToken, userID } = response
    //     const user = { name, email, accessToken, userId: userID }

    //     await axios({
    //         method: 'post',
    //         url: 'http://localhost:3000/signin/facebook',
    //         data: {
    //             user,
    //         },
    //     })
    // }

    let navigate = useNavigate();

    //-----------onFinish---------------
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onFinish = async (e) => {
        e.preventDefault()

    if(email.length === 0 || password.length === 0){
        setError(true)
    }else{
        console.log('email:', email,
        '\npassword:', password)

            try {
                const result = await axios.post("/api/auth/token", {
                    username: email,
                    password: password,
                });
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("user_id", result.data.user_id)
                navigate("/CashInvoice");
            } catch (e) {
                // form.setFields([
                //     {
                //         name: "username",
                //         errors: [e.response.data.error],
                //     },
                // ]);
            }
        }
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

                    <div>
                        <span style={{ textAlign: 'left' }}>อีเมล</span><br />

                        <input onChange={e => setEmail(e.target.value)} className='form__input1' placeholder="name@example.com" />
                        {/* ---------------error: Email---------------- */}
                        {error && email.length <= 0 ? <label style={{ color: 'red' , marginTop: '0.3rem'}}>ไม่มีที่อยู่ Email นี้ในระบบ</label> : ''}
                    </div>
                   
                    <div>   
                        <br /><span>รหัสผ่าน</span>

                        <input className='form__input2' placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร" onChange={e => setPassword(e.target.value)} />
                        {/* ---------------error: Password---------------- */}
                        {error && password.length <= 0 ? <label style={{ color: 'red' , marginTop: '0.3rem'}}>รหัสผ่านไม่ถูกต้อง</label> : ''}
                    </div>
        

                    <button type="primary" htmlType="submit" className="button-37" style={{ marginTop: '2rem', marginBottom: '1.5rem' }} onClick={onFinish}>
                        เข้าสู่ระบบ
                    </button>

                    <div className="form_text" style={{ marginBottom: '25px' }}>                            <p>ยังไม่มีบัญชีกับเรา? <span>สมัครใช้งานฟรี</span></p>
                    </div>
                    <hr style={{ color: 'rgb(173, 173, 173)' }} />

                    <div className="form_text" style={{ marginTop: '25px' }}>
                        <p>หรือเข้าสู่ระบบโดยล็อกอินผ่าน</p>
                    </div>

                    <div class="animate-bottom">
                        <button class="loginBtn loginBtn--facebook" >
                            <a href="http://localhost:3000/auth/facebook" style={{ color: "white", textDecoration: "none" }}>Log in With Facebook</a>
                        </button>

                        <button class="loginBtn loginBtn--google">
                            <a href="http://localhost:3000/auth/google" style={{ color: "white", textDecoration: "none" }}>Log in With Google</a>
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

