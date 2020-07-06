import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { validatorMaxLength, validatorEmptyPost } from '../../utlis/validators/validatorsProfile';
import {SendOutlined} from "@ant-design/icons";

const maxLength50 = validatorMaxLength(50);

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} key={user.id}/>);
    let messages = props.dialogsPage.messagesData.map((mes) => <MessageItem message={mes.message} key={mes.id}/>);

    function sendMessage(values) {
        props.sendNewMessage(values.messageForSubmit)
    }

    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogUsers}>
                {dialogs}
            </div>
            <div className={style.dialogMessages}>
                {messages}
                <DialogsFormRedux onSubmit={sendMessage} />
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={style.dialogsForm}>
            <Field name="messageForSubmit"
                component={Textarea}
                validate={[validatorEmptyPost, maxLength50]}
                placeholder='Enter your message' />
            <div className={style.sendMessageButton}>
                <button className={style.submitMessage}>
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