import React from 'react';
import classesStyle from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${classesStyle.dialogItem} ${classesStyle.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={classesStyle.messageItem}>
            {props.message}
        </div>
    )
}

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

    return (
        <div className={classesStyle.dialogsWrapper}>
            <div className={classesStyle.dialogUsers}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={classesStyle.dialogMessages}>
                <MessageItem message={messagesData[0].message} />
                <MessageItem message={messagesData[1].message} />
                <MessageItem message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;