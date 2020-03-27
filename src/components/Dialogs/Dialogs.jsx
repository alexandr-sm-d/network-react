import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = props.dialogsPage.messagesData.map((mes) => <MessageItem message={mes.message} />);
    let newText = props.dialogsPage.newMessageText

    function sendMessage(values) {
        props.sendNewMessage(values.messageForSubmit)
        console.log(values.messageForSubmit)
    }

    return (
        <div className={classesStyle.dialogsWrapper}>
            <div className={classesStyle.dialogUsers}>
                {dialogs}
            </div>
            <DialogsFormRedux messages={messages} onSubmit={sendMessage}/>
        </div>
    )
}

const DialogsForm = (props) => {

    return (
        <form className={classesStyle.dialogMessages}
            onSubmit={props.handleSubmit}>
            {props.messages}
            <Field name="messageForSubmit"
                component="textarea"
                placeholder='Enter your message' />
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({
    form: 'dialogsAddMessage'
})(DialogsForm)

export default Dialogs;