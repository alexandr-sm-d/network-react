import React from 'react';
import userPhoto from '../../assets/images/us.png';
import classesStyle from './Users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    // debugger;
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
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                        }}>unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>follow</button>}
                </div>
            ))}
        </div>
    )
}


export default Users;