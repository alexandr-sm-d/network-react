import React from 'react';
import classesStyle from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className={classesStyle.content}>
            <ProfileInfo />
            {/* <MyPosts
                postsData={props.state.postsData}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            /> */}
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;