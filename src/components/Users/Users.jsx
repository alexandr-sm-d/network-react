import React from 'react';
import userPhoto from '../../assets/images/us.png';
import classesStyle from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={classesStyle.toggle_page}>
                {pages.map((p) => {
                    return <span
                        className={props.currentPage === p && classesStyle.selected}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>

            <h1>Hi! I'am before componentDidMount</h1>

            {props.users.map((u) => (
                <div className={classesStyle.user}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={
                            u.photos.small != null
                                ? u.photos.small
                                : userPhoto
                        } />
                    </NavLink>
                    <div> {u.name} </div>
                    <div> {'u.location.cityName'} </div>
                    <div> {'u.location.contry'} </div>
                    {u.followed
                        ?
                        <button onClick={() => {
                            axios.delete(
                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": '43cbfaa5-d177-4259-a1a4-a50a7adac83a',
                                }
                            }
                            )
                                .then(resp => {
                                    if (resp.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>unfollow</button>
                        :
                        <button onClick={() => {
                            axios.post(
                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": '43cbfaa5-d177-4259-a1a4-a50a7adac83a',
                                }
                            }
                            )
                                .then(resp => {
                                    if (resp.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                            
                            // приходит ошибка 405, в header allow: GET,POST,DELETE
                            // axios.options(
                            //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            //     withCredentials: true,
                            //     headers: {
                            //         "API-KEY": '43cbfaa5-d177-4259-a1a4-a50a7adac83a',
                            //     }
                            // }
                            // )
                            //     .then(resp => {
                            //         console.log(resp)
                            //     })
                        }}>follow</button>}
                </div>
            ))}
        </div>
    )
}


export default Users;