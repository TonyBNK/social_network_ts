import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "./common/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import c from './LoginPage.module.scss';
import {Nullable} from "../types/types";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: Nullable<string>
}

const maxLength30 = maxLengthCreator(30);

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
    const submit = (formData: FormDataType) => {
        logIn(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit} captchaURL={captchaURL}/>
        </div>
    )
}

const LoginForm: React.FC<{ captchaURL: Nullable<string> } & InjectedFormProps<FormDataType, { captchaURL: Nullable<string> }>> = React.memo((
    {
        handleSubmit,
        error,
        captchaURL
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
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    component={Input}
                    type={'password'}
                    placeholder={'Password'}
                    validate={[required, maxLength30]}
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
            {
                captchaURL && <div>
                    <img src={captchaURL} alt="captcha"/>
                    <Field
                        component={Input}
                        type={'captcha'}
                        placeholder={'Captcha'}
                        name={'captcha'}
                        validate={[required]}
                    />
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
});

const LoginReduxForm = reduxForm<FormDataType, { captchaURL: Nullable<string> }>({form: 'login'})(LoginForm);
