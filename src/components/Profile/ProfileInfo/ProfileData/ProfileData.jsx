import React from 'react'
import Contact from "./Contact/Contact";

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
                <button onClick={props.goToEditMode}>Edit</button>
            </div>
        </div>
    )
}

export default ProfileData;