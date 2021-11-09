import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import c from './LoginPage.module.scss';
import {Nullable} from "../../types/types";
import {Button, Checkbox, Form, Input} from 'antd';


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: Nullable<string>
}

type LoginPagePropsType = {
    captchaURL: Nullable<string>
    logIn: (formData: FormDataType) => void
}
export const LoginPage: React.FC<LoginPagePropsType> = (
    {
        captchaURL,
        logIn
    }
) => {
    const submitLogIn = (formData: FormDataType) => {
        logIn(formData)
    }

    return (
        <div className={c.loginContainer}>
            <div className={c.titleContainer}>
                Sign In
            </div>
            <LoginForm onSubmit={submitLogIn} captchaURL={captchaURL}/>
        </div>
    )
}

const LoginForm: React.FC<{ onSubmit: (formData: FormDataType) => void, captchaURL: Nullable<string> }> = React.memo((
    {
        onSubmit,
        captchaURL
    }
) => {
    return (
        <Form onFinish={onSubmit}>
            <Form.Item name='login' rules={[
                {required: true, message: "Login is required!"},
                {max: 30, message: 'Max length of login is 30 symbols!'}
            ]}>
                <Input placeholder='Login'/>
            </Form.Item>
            <Form.Item name='password' rules={[
                {required: true, message: "Password is required!"},
                {max: 30, message: 'Max length of password is 30 symbols!'}
            ]}>
                <Input type='password' placeholder='Password'/>
            </Form.Item>
            <Form.Item name='rememberMe' label='Remember me'>
                <Checkbox/>
            </Form.Item>
            {
                captchaURL && <div className={c.captchaContainer}>
                    <img src={captchaURL} alt="captcha"/>
                    <Form.Item name='captcha' rules={[
                        {required: true, message: "Captcha is required!"}
                    ]}>
                        <Input type='captcha' placeholder='Captcha'/>
                    </Form.Item>
                </div>
            }
            <div className={c.buttonContainer}>
                <Button type='primary' htmlType='submit'>Login</Button>
            </div>
        </Form>
    )
});
