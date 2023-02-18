import React from 'react';
import logo from "../../img/logo.png";
import head from './Header.module.css';

const Header = () => {
    return <header className={head.header}>
        <img src={logo} alt="logo"/>
    </header>

};

export default Header;