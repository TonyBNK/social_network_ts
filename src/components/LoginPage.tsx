import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "./common/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import c from './LoginPage.module.scss';


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30);

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


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((
    {
        handleSubmit,
        error
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    component={Input}
                    type={'text'}
                    placeholder={'Profile'}
                    validate={[required,maxLength30]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    component={Input}
                    type={'password'}
                    placeholder={'Password'}
                    validate={[required,maxLength30]}
                />
            </div>
            {
                error && <div className={c.errorMessage}>
                    {error}
                </div>
            }
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
});

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);