import React from 'react';
import { useState } from 'react';

const ProfileStatusHooks = props => {
    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)
    
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

    // componentDidUpdate(prieviousProps, previousState) {
    //     if (prieviousProps.status !== this.props.status) {
    //         this.setState({ status: this.props.status })
    //     }
    // }

    return (
        <div>
            <div>
                {!editMode &&
                    <span onDoubleClick={activateEditMode}>
                        {props.status}</span>}
            </div>
            <div>
                {editMode &&
                    <input type="text"
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                        onChange={changeStatus} />}
            </div>
        </div>
    )

}

export default ProfileStatusHooks;