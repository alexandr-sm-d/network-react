import React from 'react';
import classesStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classesStyle.content}>
            {/* <img src='https://getbg.net/upload/full/www.GetBg.net__Team_Chelsea_059529_.jpg' /> */}
            <div className={classesStyle.description}>
                Main Content
                <div>
                    Ava + decripption
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;