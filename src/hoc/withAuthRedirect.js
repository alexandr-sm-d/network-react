import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {
    const ComponentContainer = (props) => {
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props} />
    }

    return ComponentContainer;
}

export default withAuthRedirect;