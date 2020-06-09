import React from 'react'
import Contact from "./Contact/Contact";

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>
            <div>
                <b>Full name:</b> {props.profile.fullName}
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact
                        contactKey={key}
                        contactValue={props.profile.contacts[key]}
                    />
                })}
            </div>
        </div>
    )
}

export default ProfileData;