import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavList extends Component {

    render() {
        return (
            <ul className="nav-list">
                <li><Link to='/'>在线商城</Link></li>
                <li><Link to='/'>坚果 Pro</Link></li>
                <li><Link to='/'>Smartisan M1 / M1L</Link></li>
                <li><Link to='/'>Smartisan OS</Link></li>
                <li><Link to='/'>欢喜云</Link></li>
                <li><Link to='/'>应用下载</Link></li>
                <li><Link to='/'>官方论坛</Link></li>
            </ul>
        )
    }
}

export default NavList;