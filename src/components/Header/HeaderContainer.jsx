import React from 'react';
import Header from './Header';
import { setAuthUserDataAC, getAuthUserDataTC, logout } from '../../redux/reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
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
    logout: () => {
        dispatch(logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);