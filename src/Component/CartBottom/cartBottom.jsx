import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { ToggleAll, RemoveSeleted } from '../../redux/action';

let Price = 0;
let isCheck = true;
let carts = [];
let checkCarts = [];

class CartBottom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAllChecked: true,
            checkedNum: 0
        }
    }

    CheckoutAll = () => {

        this.compute();

        this.props.dispatch( ToggleAll(1, isCheck ? 0 : 1 ) )
    };

    /*
    * 删除选中商品
    * */
    removeSelected = () => {

        // 判断是否有商品被勾选

        if( checkCarts.length ) {
            this.props.dispatch( RemoveSeleted(1) )
        }

    };

    /*
    * 前往订单页面
    * */
    goOrder = () => {
        // 不会写了
        // console.log(this.props)
    };


    compute() {

        Price = 0;

        carts = this.props.carts;
        checkCarts = carts.filter( item => {

            return item.checked
        } );

        checkCarts.forEach( item => {
            Price += item.item.price * item.quantity;
        } );

        if(checkCarts.length === carts.length) {
            isCheck = true;
        } else {
            isCheck = false;
        }

        // console.dir( this.refs.delete);
    }


    render() {

        this.compute();

        return (
            <div className="cart-bottom-bg fix-bottom">
                <div className="cart-bar-operation">
                    <div>
                        <div className="choose-all js-choose-all">
                            <span
                                className={ isCheck ? 'blue-checkbox-new checkbox-on' : 'blue-checkbox-new' }
                                onClick={ () => this.CheckoutAll() }
                            ><a> </a></span>
                            全选
                        </div>
                        <div
                            ref='delete'
                            className={ checkCarts.length ? "delete-choose-goods" : "delete-choose-goods delete-choose-goods-disabled" }
                            onClick={ this.removeSelected }
                        >删除选中的商品</div>
                    </div>
                </div>
                <div className="shipping">
                    <div className="shipping-box">
                        <div className="shipping-total shipping-num">
                            <h4 className="">
                                已选择 <i style={ checkCarts.length > 0 ? {color: '#d44d44'} : {} }>
                                    {checkCarts && checkCarts.length }
                                </i> 件商品
                            </h4>
                            <h5>
                                共计 <i > { carts.length } </i> 件商品
                            </h5>
                        </div>
                        <div className="shipping-total shipping-price">
                            <h4 className="">
                                应付总额：
                                <span style={ Price > 0 ? {color: '#d44d44'} : {} }>
                                    <span>￥</span><i>{ Price.toFixed(2) }</i>
                                </span>
                            </h4>
                            <h5 className="shipping-tips">
                                应付总额不含运费
                            </h5>
                        </div>
                    </div>
                    <span
                        className={ checkCarts.length ? "jianguo-blue-main-btn big-main-btn js-checkout" : "jianguo-blue-main-btn big-main-btn js-checkout disabled-btn" }
                        onClick={ this.goOrder }>
                        {
                            // 这里根据选中商品的个数 决定 页面是否可以跳转
                            checkCarts.length ? <Link to='/Order'>现在结算 </Link> : <a>现在结算 </a>
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default connect( state => {
    return {
        carts: state.carts
    }
} )(withRouter(CartBottom));