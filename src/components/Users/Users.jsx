import React from 'react';
import classesStyle from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/us.png'

const Users = (props) => {

    const getUsers = () => {
        if (props.users.length == 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(resp => {
                    props.setUsers(resp.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map((u) => (
                <div className={classesStyle.user}>
                    <img src={
                        u.photos.small != null
                            ? u.photos.small
                            : userPhoto
                    } />
                    <div> {u.name} </div>
                    <div> {'u.location.cityName'} </div>
                    <div> {'u.location.contry'} </div>
                    {u.followed
                        ?
                        <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                        :
                        <button onClick={() => { props.follow(u.id) }}>follow</button>}
                </div>
            ))}
        </div>
    )
}

export default Users;