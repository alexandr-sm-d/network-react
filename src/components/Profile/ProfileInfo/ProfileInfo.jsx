import React from 'react';
import classesStyle from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/us.png';
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    const setMainPhoto = (e) => {
        props.setMainPhoto(e.target.files[0])
    }

    return (
        <div className={classesStyle.content}>
            <div className={classesStyle.description}>
                <div className={classesStyle.container_ava}>
                    <div className={classesStyle.ava}>
                        <img src={props.profile.photos.large || userPhoto}/>
                    </div>
                    {!props.isOwner &&
                    <div className={classesStyle.fileform}>
                        <div className={classesStyle.selectbutton}>
                            <UploadOutlined />
                            change photo
                        </div>
                        <input type="file" onChange={setMainPhoto}/>
                    </div>
                    }
                </div>
                <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;