import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import classesStyle from './ProfileStatusHooks.module.css';


const ProfileStatusHooks = props => {
    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const changeStatus = (event) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div className={classesStyle.status}>
            <div>
                {!editMode &&
                    <span
                        className={classesStyle.spanStatus}
                        onDoubleClick={activateEditMode}>
                        {props.status}</span>}
            </div>
            <div>
                {editMode &&
                    <input
                        className={classesStyle.inputStatus}
                        type="text"
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                        onChange={changeStatus} />}
            </div>
        </div>
    )
}

export default ProfileStatusHooks;