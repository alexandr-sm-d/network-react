import React from 'react';
import { sendNewMessage, updateMessageText } from '../../redux/redusers/reduser-dialogsPage.js'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext.js';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    function sendMessage() {
                        store.dispatch(sendNewMessage())
                    }
                
                    function changeValueMessageText(text) {
                        store.dispatch(updateMessageText(text));
                    }

                    return (
                        <Dialogs sendNewMessage={sendMessage}
                            updateMessageBody={changeValueMessageText}
                            dialogsPage={state}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;