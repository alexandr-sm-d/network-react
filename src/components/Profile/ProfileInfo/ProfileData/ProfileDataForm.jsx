import React from 'react'
import Contact from "./Contact/Contact";
import {Field, reduxForm} from 'redux-form'
import {Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {compose} from "redux";
import style from "./ProfileDataForm.module.css";


const ProfileDataEditMode = (props) => {
    return (
        <ProfileDataReduxForm onSubmit={props.saveInfo}/>
    )
}

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <b>Full name: </b>
                <Field
                    component={Input}
                    placeholder={'Enter your full name'}
                    name={'fullName'}
                    type={'text'}
                />
            </div>
            <div>
                <b>About me: </b>
                <Field
                    component={Input}
                    placeholder={'Enter your information'}
                    name={'aboutMe'}
                    type={'text'}
                />
                <b>Looking for a job description: </b>
                <Field
                    component={Textarea}
                    placeholder={'Enter your description'}
                    name={'lookingForAJobDescription'}
                    type={'text'}
                />
            </div>
            <div>
                <b>Looking for a job: </b>
                <Field
                    component={'input'}
                    type={'checkbox'}
                    name={'lookingForAJob'}
                />
            </div>
            <div>
                <b>Contacts:</b>
            </div>
            {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: </b>
                    <Field
                        placeholder={key}
                        component={Input}
                        type={'text'}
                        name={'contacts.' + key}
                    />
                </div>
            })}
            <div>
                <button>Save</button>
            </div>
            {props.error &&
            <div className={style.commonError}>
                {props.error}
            </div>}
        </form>
    )
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

const ProfileDataReduxForm = compose(
    connect(state => ({
        initialValues: state.profilePage.profile,
    })), // стартовые значения формы редактирования личных данных.
    reduxForm({form: 'profile-info'}),
    connect(mapStateToProps)
)(ProfileDataForm)

export default ProfileDataEditMode;