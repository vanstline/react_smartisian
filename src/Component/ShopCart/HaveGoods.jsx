import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartList from '../CartList/cartList';
import CartBottom from "../CartBottom/cartBottom";

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

                            <CartList />

                        </div>
                    </div>
                </div>
                <CartBottom />
            </div>
        )
    }
}

export default connect( state => {
    return {
        carts: state.carts
    }
} )(HaveGoods);
