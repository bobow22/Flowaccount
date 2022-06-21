import { Button, Form, Input } from 'antd';
import '../Login & Register/Register.css';
// import axios from 'axios';


export default function Register() {
    
    const [form] = Form.useForm();

    //-----------onFinish---------------
    const onFinish = async (values) => {
        console.log(values)
       }
       
       
       return (<>

                {/* --------------------Form Register----------------- */}
                <div className="Form_Register">

                        <div className="image_header">
                            <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                            <h2>สมัครใช้งานฟรี!<br/><span>ใช้งานได้ครบทุกฟังก์ชั่น ไม่ต้องใช้บัตรเครดิต</span></h2>
                        </div>

                    
                    <div className='Form'>
                        <Form form={form} onFinish ={onFinish} id='resetForm'>
                            <Form.Item
                                    name="email"
                                    label="อีเมล*"
                                    labelCol ={{ span: 8 }}
                                    wrapperCol ={{ span: 16 }}
                                    rules={[
                                    {
                                    required: true,
                                    },
                                    ] }
                                    style={{fontSize: '15px'}}
                                    >
                                    <Input className='form__input' placeholder="name@example.com"/>
                            </Form.Item >

                            <Form.Item
                                    name="password"
                                    label="รหัสผ่าน*"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    rules={[
                                    {
                                        required: true,
                                    },
                                    ]}
                                    style={{fontSize: '15px'}}
                                >
                                <Input className='form__input' placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร"/>
                            </Form.Item>

                            <p>รหัสผ่านควรมีทั้งตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน</p>

                            <Form.Item
                                    name="Phone_number"
                                    label="เบอร์ของผู้สมัครใช้งาน*"
                                    labelCol ={{ span: 8 }}
                                    wrapperCol ={{ span: 16 }}
                                    rules={[
                                    {
                                    required: true,
                                    },
                                    ]}
                                    style={{fontSize: '15px'}}
                                    >
                                    <Input className='form__input' placeholder="09XXXXXXXX"/>
                            </Form.Item >
                            

                            <div className='form_text'>
                                <p>ในการสมัครใช้งาน ฉันได้ยอมรับ</p>
                                <p><span>ประกาศความเป็นส่วนตัวสําหรับลูกค้าและผู้รับบริการ</span> และ <span>เงื่อนไขการใช้บริการ</span></p>
                            </div>
                            

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" className="button-38">
                                    ทดลองใช้งานฟรี
                                </Button>

                            </Form.Item>

                            <div className="form_text" style={{marginBottom: '25px'}}> 
                                <p>มีบัญชีกับเราแล้ว? <span>ล็อกอินเข้าสู่ระบบ</span></p>
                            </div>
                            
                                    <hr/>

                            <div className="form_text" style={{marginTop: '25px'}}>
                                <p>หรือสมัครโดยใช้บัญชีอื่นๆ</p>
                            </div>    
                
                            <div class="animate-bottom">
                                {/* <button class="button Facebook">
                                    <span>Continue with Facebook</span>
                                    <i class="fab fa-facebook-square"></i>
                                </button> 
                                
                                <button class="button Facebook">
                                    <span>Continue with Google</span>
                                    <i class="fa-brands fa-facebook-f"></i>
                                </button> */}

                                <a class="btn btn-icon btn-facebook" href="#"><i class="fa fa-facebook"></i><span>Log in with Facebook</span></a>
                                <a class="btn btn-icon btn-googleplus" href="#"><i class="fa fa-google-plus"></i><span>Sign in with Google+</span></a>
                              
                            </div>
                        </Form>
                    </div>
                </div>
                
                <div className='FlowAccount_Co'>
                    <p>2014-2022 © FlowAccount Co., Ltd. All Right Reserved <span>Terms of Service</span><span>Privacy Policy</span></p>
                </div>
            </>
        );
    }