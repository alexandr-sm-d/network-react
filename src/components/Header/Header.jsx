import React from 'react';
import style from './Header.module.css'
import LogInOut from "./LogInOut";
import {Button} from "antd";

const Header = (props) => {
    return (
        <header>
            <LogInOut {...props}/>
        </header>
    )
}

export default Header
