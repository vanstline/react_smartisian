import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartList from '../CartList/cartList';
import { getCarts, ToggleAll } from '../../redux/action';

class HaveGoods extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAllChecked: true,
            checkedNum: 0,
            carts: this.props.carts
        }
    }

    componentDidMount() {

        // 循环查找当前数据的选中状态
        const { isAllChecked } = this.props.carts.reduce( (prev, current) => {
            return {
                isAllChecked: prev.isAllChecked && current.checked
            }
        }, {
            isAllChecked: true
        } );

        this.setState({
            isAllChecked
        })

    }

    checkout = (n) => {

        console.log(n,'子组件触发 , 需要更改状态');

        this.props.dispatch( getCarts( 1 ) );

        // const {isAllChecked, checkedNum} = this.props.carts.reduce( (prev, current) => {
        //     return {
        //         isAllChecked: prev.isAllChecked && current.checked,
        //         checkedNum: prev.checkedNum + (current.checked ? 1 : 0)
        //     }
        // }, {
        //     isAllChecked: true,
        //     checkedNum: 0
        // } );

        // setTimeout(() => {
        //     const { isAllChecked } = this.props.carts.reduce( (prev, current) => {
        //         return {
        //             isAllChecked: prev.isAllChecked && current.checked
        //         }
        //     }, {
        //         isAllChecked: true
        //     } );
        //
        //     this.setState({
        //         isAllChecked
        //     })
        //
        //
        // })

    };

    toggleAll = () => {
        /*
        * 一参 用户的　id
        * 二参 布尔值 根据当前的实际 选中情况传参 false =>  0,  true => 1
        * */
        this.setState({
            isAllChecked: !this.state.isAllChecked
        });
        // console.log( this.state.isAllChecked , 3 );
        this.props.dispatch( ToggleAll(1, this.state.isAllChecked ? 0 : 1 ) )
    };

    render() {
        // console.log(this.state.carts);

        /*
        * 计算选中商品信息
        * */
        let checkNum = 0;
        let checkPrice = 0;

        this.props.carts.forEach( item => {
            if( item.checked === true ) {
                checkNum++;
                checkPrice += item.item.price* item.quantity
            }
        } );

        // console.log(checkNum, checkPrice ,999);

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

                            <CartList Checkout={ this.checkout }/>

                        </div>
                    </div>
                </div>
                <div className="cart-bottom-bg fix-bottom">
                    <div className="cart-bar-operation">
                        <div>
                            <div className="choose-all js-choose-all">
                                <span
                                    className={this.state.isAllChecked ? 'blue-checkbox-new checkbox-on' : 'blue-checkbox-new'}
                                    onClick={this.toggleAll}><a> </a></span>
                                全选
                            </div>
                            <div className="delete-choose-goods">删除选中的商品</div>
                        </div>
                    </div>
                    <div className="shipping">
                        <div className="shipping-box">
                            <div className="shipping-total shipping-num">
                                <h4 className="">
                                    已选择 <i>{checkNum}</i> 件商品
                                </h4>
                                <h5>
                                    共计 <i > 0 </i> 件商品
                                </h5>
                            </div>
                            <div className="shipping-total shipping-price">
                                <h4 className="">
                                    应付总额：<span>￥</span><i >{checkPrice}</i>
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

export default connect( state => {
    return {
        carts: state.carts
    }
} )(HaveGoods);