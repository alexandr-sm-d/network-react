import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../../common/preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/us.png';
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileDataEditMode from "./ProfileData/ProfileDataForm";


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

    const saveInfo = formData => {
        props.saveProfileInfo(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={style.content}>
            <div className={style.description}>
                <div className={style.container_ava}>
                    <div className={style.ava}>
                        <img src={props.profile.photos.large || userPhoto}/>
                    </div>
                    {!props.isOwner &&
                    <div className={style.fileform}>
                        <div className={style.selectbutton}>
                            <UploadOutlined/>
                            change photo
                        </div>
                        <input type="file" onChange={setMainPhoto}/>
                    </div>
                    }
                </div>
                <div className={style.information}>
                    <div className={style.fullName}>
                        <b>{props.profile.fullName}</b>
                    </div>
                    <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    {editMode
                        ? <ProfileDataEditMode saveInfo={saveInfo}/>
                        : <ProfileData profile={props.profile} goToEditMode={() => setEditMode(true)}/>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;