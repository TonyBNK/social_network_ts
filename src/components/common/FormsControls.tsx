import React from "react";
import c from './FormsControls.module.scss';
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";


type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormsControlsPropsType> = React.memo((
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
});

export const Textarea: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
});

export const Input: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
});