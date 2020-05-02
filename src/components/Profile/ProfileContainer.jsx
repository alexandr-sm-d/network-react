import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getUserStatus, updateUserStatus, setMainPhoto } from '../../redux/reducers/profilePage-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    console.log('mstp profile');
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.id,
    }
}



class ProfileContainer extends React.Component {

    refreshProfile() {
        let uID = this.props.match.params.userID;
        if (!uID) {
            uID = this.props.authorizedUserID;
            if (!uID) {
                this.props.history.push('/login')
            }
        }

        this.props.getProfile(uID);
        setTimeout(() => { this.props.getUserStatus(uID) }, 5000)
        // this.props.getUserStatus(uID);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userID != prevProps.match.params.userID) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

export default compose(
    connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus, setMainPhoto }),
    withRouter,
)(ProfileContainer)
