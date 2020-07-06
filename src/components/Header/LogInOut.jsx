import React from "react";
import userPhoto from "../../assets/images/us.png";
import {LoadingOutlined, LoginOutlined, LogoutOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import style from './LogInOut.module.css'

const LogInOut = (props) => {
    return (
        <div className={style.authIsLogin}>
            {(props.isAuth)
                ? <div>
                        <span>
                            {(props.photo)
                                ? <img className={style.photoLogin} src={props.photo.photos.small || userPhoto}/>
                                : <LoadingOutlined style={{marginRight: '10px',}}/>
                            }
                                </span>
                    <Button
                        type='primary'
                        onClick={props.logout}
                        icon={<LogoutOutlined/>}
                        style={{
                            width: '100px',
                            background: '#ff7875',
                            borderRadius: '16px',
                            borderColor: '#ff7875',
                        }}>
                        Log out
                    </Button>
                </div>
                : <NavLink to='/login'>
                    <Button
                        type='primary'
                        icon={<LoginOutlined/>}
                        style={{
                            width: '100px',
                            background: '#4de880',
                            borderRadius: '16px',
                            borderColor: '#4de880',
                        }}>
                        Log in
                    </Button>
                </NavLink>}
        </div>
    )
}

export default LogInOut;