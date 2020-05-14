import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <div className={classesStyle.item}>
                <NavLink to='/profile' activeClassName={classesStyle.activeLink}>
                    <ProfileOutlined className={classesStyle.navigationIcon}/>
                    Profile
                </NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/users' activeClassName={classesStyle.activeLink}>
                    <TeamOutlined className={classesStyle.navigationIcon}/>
                    Users
                </NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/dialogs' activeClassName={classesStyle.activeLink}>
                    <MessageOutlined className={classesStyle.navigationIcon}/>
                    Message
                </NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/musicList' activeClassName={classesStyle.activeLink}>
                    <BellOutlined className={classesStyle.navigationIcon}/>
                    Music
                </NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/settingsApp' activeClassName={classesStyle.activeLink}>
                    <SettingOutlined className={classesStyle.navigationIcon}/>
                    Settings
                </NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/dev' activeClassName={classesStyle.activeLink}>
                    <RocketOutlined className={classesStyle.navigationIcon}/>
                    Dev
                </NavLink>
            </div>
        </nav>
    )
}

export default Navigation;