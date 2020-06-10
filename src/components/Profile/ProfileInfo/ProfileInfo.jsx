import React, {useState} from 'react';
import classesStyle from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/us.png';
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

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
                            <UploadOutlined/>
                            change photo
                        </div>
                        <input type="file" onChange={setMainPhoto}/>
                    </div>
                    }
                </div>
                <div className={classesStyle.information}>
                    <div className={classesStyle.fullName}>
                        <b>{props.profile.fullName}</b>
                    </div>
                    <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    {editMode
                        ? <ProfileDataForm profile={props.profile} goToViewMode={() => setEditMode(false)}/>
                        : <ProfileData profile={props.profile} goToEditMode={() => setEditMode(true)}/>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;