import React from 'react';
import classesStyle from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classesStyle.head}>
            {/* <img src='https://regnum.ru/uploads/pictures/news/2015/11/13/regnum_picture_144736430464322_normal.png' alt='' /> */}
            <div className={classesStyle.authLogin}>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;