import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/redusers/reduser-usersPage";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userID) => {
        dispatch(followAC(userID))
    },
    unfollow: (userID) => {
        dispatch(unfollowAC(userID))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;