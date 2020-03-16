import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';

// UsersAPIComponent - промежуточная контейнерная компонента, которая оборачивает Users.
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            }
        )
            .then(resp => {
                this.props.togglePreloader(false);
                this.props.setUsers(resp.data.items);
                this.props.totalCount(resp.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true,
            }
        )
            .then(resp => {
                this.props.togglePreloader(false);
                this.props.setUsers(resp.data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalCountUsers={this.props.totalCountUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}


export default UsersAPIComponent;