import React from 'react';
import classesStyle from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={classesStyle.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;