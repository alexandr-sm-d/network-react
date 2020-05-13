import React from 'react';
import classesStyle from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {LoadingOutlined, LoginOutlined, LogoutOutlined} from '@ant-design/icons';
import {Button} from "antd";
import userPhoto from './../../assets/images/us.png'

function Header(props) {
    return (
        <header className={classesStyle.head}>
            <div className={classesStyle.authLogin}>
                {(props.isAuth)
                    ? <div>
                        <span>
                            {(props.photo)
                                ? <img className={classesStyle.photoLogin} src={props.photo.photos.small || userPhoto}/>
                                : <LoadingOutlined/>
                            }
                        </span>
                        <Button onClick={props.logout} type="primary">
                            <LogoutOutlined/> Log out
                        </Button>
                    </div>
                    : <NavLink to='/login'>
                        <span>
                            {/*<img src={props.photo.photos.small || userPhoto} />*/}
                        </span>
                        <LoginOutlined/> Log in
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header
