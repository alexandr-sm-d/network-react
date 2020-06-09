import React from 'react';
import classesStyle from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={classesStyle.messageItem}>
            <span className={classesStyle.mBody}>{props.message}</span>
        </div>
    )
}

export default MessageItem;