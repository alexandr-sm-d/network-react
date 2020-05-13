import React from "react";
import userPhoto from "../../assets/images/us.png";
import {LoadingOutlined, LoginOutlined, LogoutOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import classesStyle from './LogInOut.module.css'

const LogInOut = (props) => {
    return (
        <div className={classesStyle.authIsLogin}>
            {(props.isAuth)
                ? <div>
                        <span>
                            {(props.photo)
                                ? <img className={classesStyle.photoLogin} src={props.photo.photos.small || userPhoto}/>
                                : <LoadingOutlined/>
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
                            background: '#73d13d',
                            borderRadius: '16px',
                            borderColor: '#73d13d',
                        }}>
                        Log in
                    </Button>
                </NavLink>}
        </div>
    )
}

export default LogInOut;