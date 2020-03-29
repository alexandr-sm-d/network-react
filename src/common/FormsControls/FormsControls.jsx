import React from 'react'
import classesStyle from './FormsControls.module.css'

const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${classesStyle.form} ${hasError ? classesStyle.error : ''}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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

