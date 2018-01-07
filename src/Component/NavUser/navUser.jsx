import React, { Component } from 'react';

class NavUser extends Component {

    render() {

        return (
            <li className="nav-user">
                <a href="">个人中心</a>
                <div className="nav-user-wrapper">
                    <div className="nav-user-list">
                        <dl className="nav-user-avatar">
                            <dd><span className="ng-scope"></span></dd>
                            <dt className="ng-binding">+86 138****9453</dt>
                        </dl>
                        <ul>
                            <li className="order"><a href="">我的订单</a></li>
                            <li className="support"><a href="">售后服务</a></li>
                            <li className="coupon"><a href="">我的优惠</a></li>
                            <li className="information"><a href="">账户资料</a></li>
                            <li className="address"><a href="">收货地址</a></li>
                            <li className="logout"><a href="">退出</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}

export default NavUser;