
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarts } from '../../redux/action';

import './account.css';
import './order.css';
import OrderList from "../OrderList/orderList";

let Price = 0;
let carts = [];
let checkCarts = [];

class Order extends Component {

    render() {

        let compute = () => {
            if( !this.props.carts.length ) {
                this.props.dispatch( getCarts(1) )
            }

            Price = 0;

            carts = this.props.carts;

            checkCarts = carts.filter( item => {

                return item.checked

            } );

            checkCarts.forEach( item => {
                Price += item.item.price * item.quantity;
            } );
        };

        compute();

        return (
            <div className="content clear">
                <div className="account-wrapper">
                    <div className="account-sidebar">
                        <div className="avatar gray-box clear">
                            <div className="js-account-sidebar-info">
                                <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png" alt="" />
                            </div>
                            <div className="box-inner">
                                <ul className="account-nav">
                                    <li className="current"><a href="">我的订单 </a></li>
                                    <li className=""><a href="">收货地址 </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="account-content">
                        <div className="account-order">
                            <div className="gray-box">
                                <div className="title columns-title pre-title">
                                    <h2>我的订单</h2>
                                    <div className="gray-btn-menu sort-status-menu">
                                        <span className="label"><i className="arrow"></i> 全部状态 </span>
                                        <ul className="menu-list">
                                            <li className="selected"><a href="">全部状态 </a></li>
                                            <li className=""><a href="">未完成 </a></li>
                                            <li className=""><a href="">已完成 </a></li>
                                            <li className=""><a href="">已关闭 </a></li>
                                        </ul>
                                    </div>
                                    <div className="gray-btn-menu sort-time-menu -gray-btn-menu-on">
                                        <span className="label"><i className="arrow"></i> 最近三个月 </span>
                                        <ul className="menu-list">
                                            <li className="selected"><a href="">最近三个月 </a></li>
                                            <li className=""><a href="">今年内 </a></li>
                                            <li className=""><a href="">2016年 </a></li>
                                            <li className=""><a href="">2015年 </a></li>
                                        </ul>
                                    </div>
                                </div>
                                {
                                    checkCarts.length && <OrderList data={ checkCarts } Price={ Price }/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect( state => {
    return {
        carts: state.carts
    }
} )(Order);