import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, 
    setUsers, setCurrentPage, 
    totalCount, togglePreloader } from "../../redux/redusers/reduser-usersPage";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
// })

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    totalCount,
    togglePreloader,
})(UsersAPIComponent)

export default UsersContainer;