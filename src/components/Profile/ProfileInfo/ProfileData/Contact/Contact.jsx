import React from "react";
import classesStyle from './Contact.module.css'

const Contact = ({contactKey, contactValue}) => {
    return (
        <div className={classesStyle.contact}>
            <b>{contactKey}: </b>{contactValue}
        </div>
    )
}

export default Contact;