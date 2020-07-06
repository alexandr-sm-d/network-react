import React from 'react'
import Contact from "./Contact/Contact";
import {Button} from "antd";


const ProfileData = (props) => {
    // debugger
    return (
        <div>
            <div>
                <b>Looking for a job: </b>
                {props.profile.lookingForAJob
                    ? <span>yes</span>
                    : <span>no</span>}
            </div>
            <div>
                <b>Contacts:</b>
            </div>
            {Object.keys(props.profile.contacts).map(key => {
                return <Contact
                    key={key}
                    contactKey={key}
                    contactValue={props.profile.contacts[key]}
                />
            })}
            <div>
                <Button type="primary" onClick={props.goToEditMode}>Edit</Button>
            </div>
        </div>
    )
}

export default ProfileData;