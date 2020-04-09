import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow,
    setCurrentPage, requestUsers, } from "../../redux/reducers/usersPage-reducer";
import { getUsers, getPageSize, getTotalCountUsers, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/reducers/usersPage-selectors";

// const mapStateToProps = (state) => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalCountUsers: state.usersPage.totalCountUsers,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
// })

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCountUsers: getTotalCountUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
})(UsersAPIComponent)

export default UsersContainer;