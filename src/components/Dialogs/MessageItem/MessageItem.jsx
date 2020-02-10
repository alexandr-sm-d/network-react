import React from 'react';
import classesStyle from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={classesStyle.messageItem}>
            {props.message}
        </div>
    )
}

export default MessageItem;