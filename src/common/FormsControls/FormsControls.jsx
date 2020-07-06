import React from 'react'
import style from './FormsControls.module.css'
import WarningOutlined from "@ant-design/icons/lib/icons/WarningOutlined";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.form} ${hasError ? style.error : ''}`}>
            <div>
                {props.children}
            </div>
            {hasError && <div style={{background: '#E0DCDC'}}>
                <WarningOutlined/>
                {meta.error}
                <WarningOutlined/>
            </div>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea className={style.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, ...restProps} = props
    return (
        <FormControl {...props}>
            <input className={style.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}

