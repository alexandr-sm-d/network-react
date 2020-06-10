import React from 'react'
import Contact from "./Contact/Contact";

const ProfileDataForm = (props) => {
    return (
        <div>
           Form
            <button onClick={props.goToViewMode}>Submit</button>
        </div>
    )
}

export default ProfileDataForm;