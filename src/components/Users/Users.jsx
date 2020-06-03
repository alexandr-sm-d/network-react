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
                    <NavLink to={'/profile/' + u.id}>
                        <img src={
                            u.photos.small != null
                                ? u.photos.small
                                : userPhoto
                        }/>
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