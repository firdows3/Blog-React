import React from "react"
import "../Styles/LogIn.css"
import user from "../Images/user.png"
import lock from "../Images/lock.png"
import { Link } from "react-router-dom"
import {Form, Input} from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

export default function SignUp () {

    return (
        <>
        <div className="whole-login-container">
            <div className="signup-left">
                <div>Dev's blog</div>
                <div className="login-welcome">Welcome</div>
                <div className="login-left-small-message">Join us and give information to people!</div>
            </div>
            <div className="signup-right">
                <div className="login-right-header">Sign Up</div>
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol = {{
                    span:28
                  }}
                  wrapperCol={{
                    span:86
                  }}
                  initialValues={{
                    remember:true
                  }}
                >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                            required: true,
                            message: ''
                        }
                      ]} 
                      className="each-login-whole-input"
                    >
                        <Input className="each-login-input" size="middle" placeholder='Username' prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                     name="email"
                     rules={[
                        {
                            required:true,
                            message: ''
                        },
                        {
                            type:'email',
                            message: 'Invalid email'
                        }
                     ]}
                     className="each-login-whole-input"
                     
                    >
                        <Input className="each-login-input" size="middle" placeholder='Email' prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                            require: true,
                            message: 'Choose a strong password'
                        }
                      ]}
                      hasFeedback
                      className="each-login-whole-input"
                    >
                        <Input.Password className="each-login-input" size='middle' placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="reapeatPassword"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                            required: true,
                            message: 'It must match the password'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if(!value || getFieldValue('password') === value){
                                    return Promise.resolve();
                                }
                                return Promise.reject("Doesn't match")
                            }
                        })
                      ]}
                      className="each-login-whole-input"
                    >
                        <Input.Password className="each-login-input" size="middle" placeholder="Confirm Password"/>
                    </Form.Item>
                </Form>
                <div className="login-button">Sign Up</div>
                <div className="login-right-footer">Already have an account?  <Link to="/login">Log In</Link></div>
            </div>
        </div>
        </>
    )
}