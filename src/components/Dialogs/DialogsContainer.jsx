import React from 'react';
import { sendNewMessage, updateMessageText } from '../../redux/redusers/reduser-dialogsPage.js'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    function sendMessage() {
        props.store.dispatch(sendNewMessage())
    }

    function changeValueMessageText(text) {
        props.store.dispatch(updateMessageText(text));
    }

    return (
        <Dialogs sendNewMessage={sendMessage}
        updateMessageBody={changeValueMessageText}
        dialogsPage={state}
        />
    )
}

export default DialogsContainer;