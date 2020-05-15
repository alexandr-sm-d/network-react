import React from 'react';
import classesStyle from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    // debugger
    return (
        <div className={classesStyle.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.match.params.userID}
                         setMainPhoto={props.setMainPhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;