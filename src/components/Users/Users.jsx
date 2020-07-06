import React from 'react';
import userPhoto from '../../assets/images/us.png';
import style from './Users.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from '../../common/paginator/Paginator';
import {Pagination} from "antd";

const Users = (props) => {

    return (
        <div className={style.usersPage}>

            {/*<Paginator*/}
            {/*    totalCountUsers={props.totalCountUsers}*/}
            {/*    pageSize={props.pageSize}*/}
            {/*    currentPage={props.currentPage}*/}
            {/*    onPageChanged={props.onPageChanged}*/}
            {/*/>*/}

            <Pagination
                className={style.pagination}
                onChange={props.onPageChanged}
                total={props.totalCountUsers}
            />

            {props.users.map((u) => (
                <div className={style.user} key={u.id}>
                    <div className={style.photo}>
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
                                className={style.follow}
                                disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>unfollow</button>
                            :
                            <button
                                className={style.unfollow}
                                disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>follow</button>}
                    </div>
                    <div className={style.info}>
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