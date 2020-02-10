import React from 'react';
import classesStyle from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={classesStyle.content}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} />
        </div>
    )
}

export default Profile;