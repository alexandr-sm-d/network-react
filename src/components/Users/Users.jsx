import React from 'react';
import classesStyle from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/us.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        alert('new component')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(resp => {
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map((u) => (
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
                            <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                            :
                            <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                    </div>
                ))}
            </div>
        )
    }
}

export default Users;