import React from 'react';
import Header from './Header';
import { setAuthUserDataAC, showAuthTC, logout } from '../../redux/redusers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.showAuth()
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
    showAuth: () => {
        dispatch(showAuthTC())
    },
    logout: () => {
        alert(1)
        dispatch(logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);