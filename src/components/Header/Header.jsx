import React from 'react';
import classesStyle from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {
    HomeOutlined
} from '@ant-design/icons';

const Header = (props) => {
    return (
        <header className={classesStyle.head}>
            <div className={classesStyle.authLogin}>
                {(props.isAuth)
                    ? <div>
                        <span>{props.login}</span> - <button onClick={props.logout}>Log Out</button>
                    </div>
                    : <NavLink to='/login'>
                        <HomeOutlined/> Log in
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header
