import React from 'react';
import classesStyle from './Users.module.css'

const Users = (props) => {

    if (props.users.length == 0) {
        props.setUsers([{
            id: 1,
            photoURL: 'https://ru.baku.ws/uploads/posts/2019-06/1559909852_vcr8zt7l8bg.jpg',
            followed: true,
            fullName: 'Azar J.',
            status: `I log in here`,
            location: {
                cityName: 'London',
                contry: 'England',
            },
        },
        {
            id: 2,
            photoURL: 'https://realworldofsport.files.wordpress.com/2015/08/c5e01-john2bterry.jpg?w=1200',
            followed: false,
            fullName: 'Terry M.',
            status: `I log in here`,
            location: {
                cityName: 'London',
                contry: 'England',
            },
        },
        {
            id: 3,
            photoURL: 'https://img.tsn.ua/cached/1533897632/tsn-d5a3c83b3e2b3f0a9ff57401c8651a3a/thumbs/1200x630/58/7a/47651445fd9362215813fa3c8ff57a58.jpg',
            followed: false,
            fullName: 'Lampard F.',
            status: `I log in here`,
            location: {
                cityName: 'London',
                contry: 'England',
            },
        },])
    }
  
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