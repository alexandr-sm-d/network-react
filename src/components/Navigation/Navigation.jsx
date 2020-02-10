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
                <NavLink to='/dialogs' activeClassName={classesStyle.activeLink}>Message</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/newsLenta' activeClassName={classesStyle.activeLink}>News</NavLink>
            </div>
            <div className={classesStyle.item}>
                <NavLink to='/musicList' activeClassName={classesStyle.activeLink}>Music</NavLink>
            </div>
            <div className={classesStyle.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navigation;