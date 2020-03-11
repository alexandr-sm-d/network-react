import React from 'react';
import userPhoto from '../../assets/images/us.png';
import classesStyle from './Users.module.css';


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