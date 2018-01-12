import React, { Component } from 'react';
import CartList from '../CartList/cartList';

class HaveGoods extends Component {

    render() {

        return (
            <div>
                <div>
                    <div className="cart-table-title">
                        <span className="name">商品信息</span>
                        <span className="operation">操作</span>
                        <span className="subtotal">小计</span>
                        <span className="num">数量</span>
                        <span className="price">单价</span>
                    </div>
                    <div className="cart-table">
                        <div className="cart-group">

                            <CartList data={this.props.data}/>

                        </div>
                    </div>
                </div>
                <div className="cart-bottom-bg fix-bottom">
                    <div className="cart-bar-operation">
                        <div>
                            <div className="choose-all js-choose-all">
                                <span className="blue-checkbox-new checkbox-on"><a> </a></span>
                                全选
                            </div>
                            <div className="delete-choose-goods">删除选中的商品</div>
                        </div>
                    </div>
                    <div className="shipping">
                        <div className="shipping-box">
                            <div className="shipping-total shipping-num">
                                <h4 className="">
                                    已选择 <i>0</i> 件商品
                                </h4>
                                <h5>
                                    共计 <i >3</i> 件商品
                                </h5>
                            </div>
                            <div className="shipping-total shipping-price">
                                <h4 className="">
                                    应付总额：<span>￥</span><i >0</i>
                                </h4>
                                <h5 className="shipping-tips">
                                    应付总额不含运费
                                </h5>

                            </div>
                        </div>
                        <span className="jianguo-blue-main-btn big-main-btn js-checkout disabled-btn"><a>现在结算 </a></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HaveGoods;