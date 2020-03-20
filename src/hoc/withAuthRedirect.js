import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

const withAuthRedirect = (Component) => {
    const ComponentContainer = (props) => {
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props} />
    }

    return connect(mapStateToPropsForRedirect)(ComponentContainer);
}

export default withAuthRedirect;