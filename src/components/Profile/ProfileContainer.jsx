import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile } from '../../redux/redusers/reduser-profilePage';
import { withRouter } from 'react-router-dom';
// import apiDAL from '../../apiDAL/apiDAL';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        // debugger;
        let uID = this.props.match.params.userID;
        if (!uID) {
            uID = 2;
        }
        this.props.getProfile(uID);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let WithRouterProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getProfile})(WithRouterProfileContainer);