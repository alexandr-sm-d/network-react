import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = props.dialogsPage.messagesData.map((mes) => <MessageItem message={mes.message} />);
    let newText = props.dialogsPage.newMessageText

    let newMessageElement = React.createRef()

    function sendMessage() {
        props.sendNewMessage()
    }

    function changeValueMessageText() {
        let text = newMessageElement.current.value;
        props.updateMessageBody(text)
    }

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
                    value ={newText}
                />
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;