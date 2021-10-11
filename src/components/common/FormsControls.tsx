import React from "react";
import c from './FormsControls.module.scss';
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";


type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormsControlsPropsType> = (
    {
        meta: {
            touched,
            error
        },
        children
    }
) => {
    const hasError = error && touched;

    return (
        <div className={`${c.formControl} ${hasError ? c.error : ''}`}>
            <div>
                {
                    children
                }
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}