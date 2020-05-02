import React from 'react';
import { NavLink } from 'react-router-dom';
import classesStyle from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={classesStyle.nav}>
            <div className={classesStyle.item}>
                <NavLink to='/profile' activeClassName={classesStyle.activeLink}>Profile</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/users' activeClassName={classesStyle.activeLink}>Users</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/dialogs' activeClassName={classesStyle.activeLink}>Message</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/musicList' activeClassName={classesStyle.activeLink}>Music</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/settingsApp' activeClassName={classesStyle.activeLink}>Settings</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/dev' activeClassName={classesStyle.activeLink}>Dev</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;