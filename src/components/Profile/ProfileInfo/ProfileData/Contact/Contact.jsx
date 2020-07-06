import React from "react";
import style from './Contact.module.css'

const Contact = ({contactKey, contactValue}) => {
    return (
        <div className={style.contact}>
            <b>{contactKey}: </b>{contactValue}
        </div>
    )
}

export default Contact;