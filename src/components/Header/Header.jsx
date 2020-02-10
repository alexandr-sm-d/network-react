import React from 'react';
import classesStyle from './Header.module.css'

const Header = () => {
    return (
        <header className={classesStyle.header}>
            <img src='https://regnum.ru/uploads/pictures/news/2015/11/13/regnum_picture_144736430464322_normal.png' alt='' />
        </header>
    )
}

export default Header;