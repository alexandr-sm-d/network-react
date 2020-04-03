import React from 'react';
import classesStyle from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classesStyle.head}>
            {/* <img src='https://regnum.ru/uploads/pictures/news/2015/11/13/regnum_picture_144736430464322_normal.png' alt='' /> */}
            <div className={classesStyle.authLogin}>
                {(props.isAuth)
                    ? <div>
                        <span>{props.login}</span> - <button onClick={props.logout}>Log Out</button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;