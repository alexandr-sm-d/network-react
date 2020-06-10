import React from 'react'
import classesStyle from './FormsControls.module.css'
import WarningOutlined from "@ant-design/icons/lib/icons/WarningOutlined";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${classesStyle.form} ${hasError ? classesStyle.error : ''}`}>
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
            <textarea className={classesStyle.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, ...restProps} = props
    return (
        <FormControl {...props}>
            <input className={classesStyle.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}

