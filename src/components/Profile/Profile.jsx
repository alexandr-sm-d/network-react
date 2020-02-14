import React from 'react';
import classesStyle from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // console.log(Object.getOwnPropertyDescriptor(props.state, 'newPostText'))

    return (
        <div className={classesStyle.content}>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                newPost={props.newPost}
                newPostText={props.state.newPostText}
                updateData={props.update} />
        </div>
    )
}

export default Profile;