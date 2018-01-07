
import React, { Component } from 'react';

import './header.css';
import Logo from "../Logo/logo";
import NavList from "../NavList/navList";
import SubNavList from "../SubNavList/subNavList";
import NavUser from "../NavUser/navUser";
import NavCart from "../NavCart/navCart";

/*
* 组件拆分
*   logo
*   NavList
*   NavUser
*   NavCart
* */

class Header extends Component {

    render() {
        return (
            <div id="header">
                <div className="nav-global">
                    <div className="container">
                        <Logo />
                        <ul className="nav-aside">
                            <NavUser />
                            <NavCart />
                        </ul>
                        <NavList />
                    </div>
                </div>
                <SubNavList />
            </div>
        )
    }
}

export default Header;