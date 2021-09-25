import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type LoginPagePropsType = {
    logIn: (formData: FormDataType) => void
}
export const LoginPage: React.FC<LoginPagePropsType> = (
    {
        logIn
    }
) => {
    const submit = (formData: FormDataType) => {
        logIn(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (
    {
        handleSubmit
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    component={'input'}
                    type={'text'}
                    placeholder={'Profile'}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    component={'input'}
                    type={'text'}
                    placeholder={'Password'}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    component={'input'}
                    type={'checkbox'}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);