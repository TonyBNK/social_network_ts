import React from "react";
import c from './FormsControls.module.scss';


type FormsControlsPropsType = {
    input: any,
    meta: any,
    text: string
}
const FormControl: React.FC<FormsControlsPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return (
        <div className={`${c.formControl} ${hasError ? c.error : ''}`}>
            <div>
                {
                    props.children
                }
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}