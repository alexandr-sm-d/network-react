import React from 'react';
import classesStyle from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={classesStyle.content}>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                newPost={props.state.newPost}
                newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;