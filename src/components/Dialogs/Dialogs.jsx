import React from 'react';
import classesStyle from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Vlad' },
        { id: 3, name: 'Mike' },
        { id: 4, name: 'Andrey' },
    ];

    let messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you'},
        {id:3, message: 'How old are you'},
    ]

    let dialogs = dialogsData.map((user) => <DialogItem name={user.name} id={user.id} />);
    let messages = messagesData.map((mes) => <MessageItem message={mes.message} />);

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