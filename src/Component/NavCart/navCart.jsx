import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCarts, RemoveCartMold } from '../../redux/action';

class NavCart extends Component {

    componentDidMount() {

        if( !this.props.carts.length) {
            this.props.dispatch( getCarts(1) );
        }
    }

    RemoveCartClass = (item) => {
        console.log( '删除' + item );
        this.props.dispatch( RemoveCartMold( 1, item) )
    };

    getCartPopup() {
        if( this.props.carts.length ) {

            let totalPrice = 0;
            let total = this.props.carts.reduce( ( preValue, curValue ) => {
                // 在循环的过程中 计算最终的商品总价
                totalPrice += curValue.quantity * curValue.item.price;
                // 返回 商品的总件数
                // console.log(preValue)
                return preValue + curValue.quantity
            }, 0 )

            // console.log( total, totalPrice )

            return (
                <div className="full">
                    <div className="nav-cart-items">
                        <ul>
                            {
                                this.props.carts.map( LI => {
                                    // console.log( LI,444)

                                    return (
                                        <li className="clear" key={LI.id} >
                                            <div className="cart-item js-cart-item cart-item-sell">
                                                <div className="cart-item-inner">
                                                    <div className="item-thumb">
                                                        <img src={ LI.item.cover } alt="" />
                                                    </div>
                                                    <div className="item-desc">
                                                        <div className="cart-cell">
                                                            <h4 title={ LI.item.title + ' - ' + LI.item.name }>
                                                                <a href="#/item/100027401">
                                                                    { LI.item.title + ' - ' + LI.item.name }
                                                                </a>
                                                            </h4>
                                                            <p className="attrs">
                                                                <span>{ LI.item.sub_title }</span>
                                                            </p>
                                                            <h6>
                                                                <span className="price-icon">¥</span>
                                                                <span className="price-num">
                                                                    { LI.item.price }
                                                                </span>
                                                                <span className="item-num"> x {LI.quantity}</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="del-btn" onClick={ () => this.RemoveCartClass(LI.item.id) }>删除</div>
                                                </div>
                                            </div>
                                        </li>
                                    )

                                } )
                            }

                        </ul>
                    </div>
                    <div className="nav-cart-total">
                        <p>共 <strong className="ng-binding">{total}</strong> 件商品</p>
                        <h5>合计：
                            <span className="price-icon">¥</span>
                            <span className="price-num ng-binding">{totalPrice}</span>
                        </h5>
                        <h6>
                            {/*<a className="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>*/}
                            <Link className="nav-cart-btn" to='/Cart'>去购物车</Link>
                        </h6>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="empty">
                    <h3>购物车为空</h3>
                    <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                </div>
            );
        }
    }

    render() {

        // console.log(this.props.carts)
        let carts = {};
        carts = this.props.carts;

        return (
            <li className="nav-cart">
                <Link to='/Cart'>购物车</Link>
                <span className="cart-empty-num cart-num">
                    <i>{ carts.length }</i>
                </span>
                <div className="nav-cart-wrapper">
                    <div className="nav-cart-list">
                        { this.getCartPopup() }
                    </div>
                </div>
            </li>
        )
    }
}

export default connect( state => {
    return {
        carts: state.carts
    }
} )(NavCart);