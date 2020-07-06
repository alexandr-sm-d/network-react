import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.match.params.userID}
                         setMainPhoto={props.setMainPhoto}
                         saveProfileInfo={props.saveProfileInfo}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;