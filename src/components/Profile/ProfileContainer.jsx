import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getUserStatus, updateUserStatus } from '../../redux/redusers/reduser-profilePage';
import { withRouter, Redirect } from 'react-router-dom';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        // debugger;
        let uID = this.props.match.params.userID;
        if (!uID) {
            uID = 2;
        }
        this.props.getProfile(uID);
        setTimeout(()=> {this.props.getUserStatus(uID)}, 2000)
        // this.props.getUserStatus(uID);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer)
