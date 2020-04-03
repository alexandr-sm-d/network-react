import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow,
    setCurrentPage, getUsers, } from "../../redux/reducers/usersPage-reducer";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})

// const mapDispatchToProps = (dispatch) => ({
//     follow: (userID) => {
//         dispatch(followAC(userID))
//     },
//     unfollow: (userID) => {
//         dispatch(unfollowAC(userID))
//     },
//     setUsers: (users) => {
//         dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (value) => {
//         dispatch(setCurrentPageAC(value))
//     },
//     setTotalCount: (amount) => {
//         dispatch(totalCountAC(amount))
//     },
//     togglePreloader: (toggleValue) => {
//         dispatch(togglePreloaderAC(toggleValue))
//     }
//     getUsers: (currentPage, pageSize) => {
//         dispatch(getUsersTC(currentPage, pageSize))
//     }
// })

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersAPIComponent)

export default UsersContainer;