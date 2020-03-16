import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUserDataAC } from '../../redux/redusers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        })
            .then((response) => {
                // debugger;
                if (response.data.resultCode === 0) {
                    alert('авторизован(залгоинин)')
                    let authData = response.data.data;
                    this.props.setAuthUserData(authData);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    setAuthUserData: (value) => {
        dispatch(setAuthUserDataAC(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);