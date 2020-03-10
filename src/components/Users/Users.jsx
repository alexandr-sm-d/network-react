import React from 'react';
import classesStyle from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/us.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then(resp => {
                this.props.setUsers(resp.data.items)
                this.props.setTotalCount(resp.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
            .then(resp => {
                this.props.setUsers(resp.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCountUsers / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={classesStyle.toggle_page}>
                    {pages.map((p) => {
                        return <span
                            className={this.props.currentPage === p && classesStyle.selected}
                            onClick={() => this.onPageChanged(p)}>{p}</span>
                    })}
                </div>
                <h1>Hi! I'am before componentDidMount</h1>
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