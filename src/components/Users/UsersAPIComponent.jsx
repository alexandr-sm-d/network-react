import React from 'react';
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';

// UsersAPIComponent - промежуточная контейнерная компонента, которая оборачивает Users.
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowing={this.props.toggleFollowing}
                />
            </>
        )
    }
}


export default UsersAPIComponent;