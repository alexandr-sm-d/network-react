import React from 'react';
import userPhoto from '../../assets/images/us.png';
import classesStyle from './Users.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from '../../common/paginator/Paginator';
import {Pagination} from "antd";

const Users = (props) => {

    return (
        <div className={classesStyle.usersPage}>

            {/*<Paginator*/}
            {/*    totalCountUsers={props.totalCountUsers}*/}
            {/*    pageSize={props.pageSize}*/}
            {/*    currentPage={props.currentPage}*/}
            {/*    onPageChanged={props.onPageChanged}*/}
            {/*/>*/}

            <Pagination
                className={classesStyle.pagination}
                onChange={props.onPageChanged}
                total={props.totalCountUsers}
            />

            <h1>Hi! I'am before componentDidMount</h1>

            {props.users.map((u) => (
                <div className={classesStyle.user}>
                    <div className={classesStyle.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={
                                u.photos.large != null
                                    ? u.photos.large
                                    : userPhoto
                            }/>
                        </NavLink>
                        {u.followed
                            ?
                            <button
                                className={classesStyle.follow}
                                disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>unfollow</button>
                            :
                            <button
                                className={classesStyle.unfollow}
                                disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>follow</button>}
                    </div>
                    <div className={classesStyle.info}>
                        <div>
                            <b>{u.name}</b>
                        </div>
                        <div> {'u.location.cityName'} </div>
                        <div> {'u.location.contry'} </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Users;