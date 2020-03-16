import React from 'react';
import Header from './Header';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        })
        .then((response) => {
            debugger;
            if (response.data.resultCode === 0) {
                //произойдет изменение слова Логин на мой ник.
            }
        })
    }
    
    render() {
        return (
            <Header />
        )
    }
}

export default HeaderContainer;