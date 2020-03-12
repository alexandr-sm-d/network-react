import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from '../../redux/redusers/reduser-profilePage';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

class ProfileContainer extends React.Component {
    // debugger;
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
        )
            .then(resp => {
                // debugger;
                this.props.setUserProfile(resp.data);
            })
    }

    render() {
        // debugger;
        // console.log(this.props)
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);