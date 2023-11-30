import React from "react"
import "../Styles/LogIn.css"
import user from "../Images/user.png"
import lock from "../Images/lock.png"
import { Link } from "react-router-dom"
import {Form, Input} from "antd"
import {UserOutlined, LockOutlined} from '@ant-design/icons'

export default function LogIn () {


    return (
        <>
        <div className="whole-login-container">
            <div className="login-left">
                <div>Dev's blog</div>
                <div className="login-welcome">Welcome</div>
                <div className="login-left-small-message">Join us and give information to people!</div>
            </div>
            <div className="login-right">
                <div className="login-right-header">Log in</div>
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol={{
                    span: 28,
                  }}
                  wrapperCol={{
                    span: 86,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                >
                    <Form.Item
                      name="email_Or_username"
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                      className="each-login-whole-input"
                    >
                        <Input className="each-login-input"  size="middle" placeholder="Email or Username" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="email_Or_username"
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                      className="each-login-whole-input"
                    >
                        <Input.Password className="each-login-input"  size="middle" placeholder="password" prefix={<LockOutlined />}  />
                    </Form.Item>
                </Form>
                <div className="login-forgot-password">Forgot Password?</div>
                <div className="login-button">Log in</div>
                <div className="login-right-footer"><Link to="/signup">Create Account</Link></div>
            </div>
        </div>
        </>
    )
}