import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = props.state.messagesData.map((mes) => <MessageItem message={mes.message} />);

    return (
        <div className={classesStyle.dialogsWrapper}>
            <div className={classesStyle.dialogUsers}>
                {dialogs}
            </div>
            <div className={classesStyle.dialogMessages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;