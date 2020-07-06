import React from 'react';
import style from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={style.messageItem}>
            <span className={style.mBody}>{props.message}</span>
        </div>
    )
}

export default MessageItem;