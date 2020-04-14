import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getUserStatus, updateUserStatus } from '../../redux/reducers/profilePage-reducer';
import { withRouter, Redirect } from 'react-router-dom';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    console.log('mstp profile');
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.id,
    }
}



class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger;
        let uID = this.props.match.params.userID;
        if (!uID) {
            uID = this.props.authorizedUserID;
            if (!uID) {
                this.props.history.push('/login')
            }
        }

        this.props.getProfile(uID);
        setTimeout(() => { this.props.getUserStatus(uID) }, 2000)
        // this.props.getUserStatus(uID);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

export default compose(
    // withAuthRedirect,    redirect path=login
    connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }),
    withRouter,
)(ProfileContainer)
