import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from '../../redux/redusers/reduser-profilePage';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let uID = this.props.match.params.userID;

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + uID
        )
            .then(resp => {
                this.props.setUserProfile(resp.data);
            })
    }

    render() {
        // debugger;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let WithRouterProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer);