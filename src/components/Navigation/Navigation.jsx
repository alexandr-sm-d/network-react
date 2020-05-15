import React from 'react';
import {NavLink} from 'react-router-dom';
import classesStyle from './Navigation.module.css';
import {
    ProfileOutlined,
    TeamOutlined,
    MessageOutlined,
    SettingOutlined,
    BellOutlined,
    RocketOutlined
} from "@ant-design/icons";

const Navigation = () => {
    return (
        <nav className={classesStyle.nav}>
            <NavLink to='/profile' activeClassName={classesStyle.activeLink}>
                <div className={classesStyle.item}>
                    <ProfileOutlined className={classesStyle.navigationIcon}/>
                    Profile
                </div>
            </NavLink>
            <NavLink to='/users' activeClassName={classesStyle.activeLink}>
                <div className={classesStyle.item}>
                    <TeamOutlined className={classesStyle.navigationIcon}/>
                    Users
                </div>
            </NavLink>
            <NavLink to='/dialogs' activeClassName={classesStyle.activeLink}>
                <div className={classesStyle.item}>
                    <MessageOutlined className={classesStyle.navigationIcon}/>
                    Message
                </div>
            </NavLink>
            <NavLink to='/musicList' activeClassName={classesStyle.activeLink}>
                <div className={classesStyle.item}>
                    <BellOutlined className={classesStyle.navigationIcon}/>
                    Music
                </div>
            </NavLink>
            <NavLink to='/settingsApp' activeClassName={classesStyle.activeLink}>
                <div className={classesStyle.item}>
                    <SettingOutlined className={classesStyle.navigationIcon}/>
                    Settings
                </div>
            </NavLink>
            <NavLink to='/dev' activeClassName={classesStyle.activeLink}>
                <div className={classesStyle.item}>
                    <RocketOutlined className={classesStyle.navigationIcon}/>
                    Dev
                </div>
            </NavLink>
        </nav>
    )
}

export default Navigation;