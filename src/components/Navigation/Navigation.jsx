import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navigation.module.css';
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
        <nav className={style.nav}>
            <NavLink to='/profile' activeClassName={style.activeLink}>
                <div className={style.item}>
                    <ProfileOutlined className={style.navigationIcon}/>
                    Profile
                </div>
            </NavLink>
            <NavLink to='/users' activeClassName={style.activeLink}>
                <div className={style.item}>
                    <TeamOutlined className={style.navigationIcon}/>
                    Users
                </div>
            </NavLink>
            <NavLink to='/dialogs' activeClassName={style.activeLink}>
                <div className={style.item}>
                    <MessageOutlined className={style.navigationIcon}/>
                    Message
                </div>
            </NavLink>
            <NavLink to='/musicList' activeClassName={style.activeLink}>
                <div className={style.item}>
                    <BellOutlined className={style.navigationIcon}/>
                    Music
                </div>
            </NavLink>
            <NavLink to='/settingsApp' activeClassName={style.activeLink}>
                <div className={style.item}>
                    <SettingOutlined className={style.navigationIcon}/>
                    Settings
                </div>
            </NavLink>
            <NavLink to='/dev' activeClassName={style.activeLink}>
                <div className={style.item}>
                    <RocketOutlined className={style.navigationIcon}/>
                    Dev
                </div>
            </NavLink>
        </nav>
    )
}

export default Navigation;