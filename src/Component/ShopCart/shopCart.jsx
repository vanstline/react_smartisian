import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarts } from '../../redux/action';
import HaveGoods from './HaveGoods';

import './cart.css';

class ShopCart extends Component {

    componentDidMount() {
        this.props.dispatch( getCarts( 1 ) );
    }

    render() {

        function None() {
            return (
                <div className="empty-label">
                    <h3>您的购物车中还没有商品</h3>
                    <a className="link" href="">现在选购 </a>
                </div>
            )
        }

        return (
            <div className='store-content'>
                <div className="cart-box">
                    <div className="title">
                        <h2>购物清单</h2>
                    </div>
                    <div className="cart-inner">
                        {
                            this.props.items.length ? <HaveGoods data={this.props.items} /> : None()
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default connect( state => {
    return {
        items: state.carts
    }
} )(ShopCart);