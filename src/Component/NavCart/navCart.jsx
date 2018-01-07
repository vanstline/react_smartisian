import React, { Component } from 'react';

class NavCart extends Component {

    render() {

        return (
            <li className="nav-cart">
                <a href="">购物车</a>
                <span className="cart-empty-num cart-num">
								<i>0</i>
							</span>
                <div className="nav-cart-wrapper">
                    <div className="nav-cart-list">
                        <div className="empty">
                            <h3>购物车为空</h3>
                            <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                        </div>
                        <div className="full">
                            <div className="nav-cart-items">
                                <ul>
                                    <li className="clear">
                                        <div className="cart-item js-cart-item cart-item-sell">
                                            <div className="cart-item-inner">
                                                <div className="item-thumb">
                                                    <img src="./img/goods/1.png" alt="" />
                                                </div>
                                                <div className="item-desc">
                                                    <div className="cart-cell">
                                                        <h4>
                                                            <a href="#/item/100027401">坚果 Pro 钢化玻璃保护膜（前屏用）</a>
                                                        </h4>
                                                        <p className="attrs">
                                                            <span>透明</span>
                                                        </p>
                                                        <h6>
                                                            <span className="price-icon">¥</span><span className="price-num">49</span><span className="item-num">x 1</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="del-btn">删除</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-cart-total">
                                <p>共 <strong className="ng-binding">1</strong> 件商品</p>
                                <h5>合计：<span className="price-icon">¥</span><span className="price-num ng-binding" ng-bind="cartMenu.totalPrice">49</span></h5>
                                <h6>
                                    <a ng-href="http://www.smartisan.com/shop/#/cart" className="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default NavCart;