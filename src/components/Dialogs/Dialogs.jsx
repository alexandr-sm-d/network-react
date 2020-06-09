import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { validatorMaxLength, validatorEmptyPost } from '../../utlis/validators/validatorsProfile';
import {SendOutlined} from "@ant-design/icons";

const maxLength50 = validatorMaxLength(50);

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = props.dialogsPage.messagesData.map((mes) => <MessageItem message={mes.message} />);

    function sendMessage(values) {
        props.sendNewMessage(values.messageForSubmit)
    }

    return (
        <div className={classesStyle.dialogsWrapper}>
            <div className={classesStyle.dialogUsers}>
                {dialogs}
            </div>
            <div className={classesStyle.dialogMessages}>
                {messages}
                <DialogsFormRedux onSubmit={sendMessage} />
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={classesStyle.dialogsForm}>
            <Field name="messageForSubmit"
                component={Textarea}
                validate={[validatorEmptyPost, maxLength50]}
                placeholder='Enter your message' />
            <div className={classesStyle.sendMessageButton}>
                <button className={classesStyle.submitMessage}>
                    <SendOutlined/>
                </button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({
    form: 'dialogsAddMessage'
})(DialogsForm)

export default Dialogs;