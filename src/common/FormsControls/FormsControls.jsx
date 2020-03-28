import React from 'react'
import classesStyle from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    // debugger
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${classesStyle.form} ${hasError ? classesStyle.error : ''}`}>
            <div>
                <textarea className={classesStyle.textarea} {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}