import React from 'react';
import classesStyle from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/us.png';

const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    const setMainPhoto = (e) => {
        props.setMainPhoto(e.target.files[0])
    }

    return (
        <div className={classesStyle.content}>
            {/* <img src='https://getbg.net/upload/full/www.GetBg.net__Team_Chelsea_059529_.jpg' /> */}
            <div className={classesStyle.description}>
                <div className={classesStyle.container_ava}>
                    <div className={classesStyle.ava}>
                        <img src={props.profile.photos.large || userPhoto} />
                    </div>
                    <div>
                        {!props.isOwner && <input type="file" onChange={setMainPhoto}/>}
                    </div>
                    Ava + decripption
                </div>
                <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;