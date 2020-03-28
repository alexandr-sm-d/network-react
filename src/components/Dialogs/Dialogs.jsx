import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { validatorMaxLength, validatorEmptyPost } from '../../utlis/validators/validatorsProfile';

const maxLength50 = validatorMaxLength(50);

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = props.dialogsPage.messagesData.map((mes) => <MessageItem message={mes.message} />);

    function sendMessage(values) {
        props.sendNewMessage(values.messageForSubmit)
        console.log(values.messageForSubmit)
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
        <form onSubmit={props.handleSubmit}>
            <Field name="messageForSubmit"
                component={Textarea}
                validate={[validatorEmptyPost, maxLength50]}
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