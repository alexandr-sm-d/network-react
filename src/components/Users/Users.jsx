import React from 'react';
import classesStyle from './Users.module.css'

const Users = (props) => {
    return (
        <div>
            {props.users.map((u) => (
                <div className={classesStyle.user}>
                    <img src={u.photoURL} />
                    <div> {u.fullName} </div>
                    <div> {u.location.cityName} </div>
                    <div> {u.location.contry} </div>
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