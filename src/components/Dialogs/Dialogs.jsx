import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import { sendNewMessage, updateMessageText } from './../../redux/state.js'

const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    function sendMessage() {
        props.dispatch(sendNewMessage())
    }

    function changeValueMessageText() {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageText(text));
    }

    let dialogs = props.state.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = props.state.messagesData.map((mes) => <MessageItem message={mes.message} />);

    return (
        <div className={classesStyle.dialogsWrapper}>
            <div className={classesStyle.dialogUsers}>
                {dialogs}
            </div>
            <div className={classesStyle.dialogMessages}>
                {messages}
                <textarea
                    ref={newMessageElement}
                    placeholder='Enter your message'
                    onChange={changeValueMessageText}
                    value ={props.state.newMessageText}
                />
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;