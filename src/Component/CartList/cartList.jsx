import React, { Component } from 'react';

class CartList extends Component {


    render() {
        console.log(this.props.data,1);
        return (
            <div>
                {
                    this.props.data.map( item => {

                        return (
                            <div key={ item.id } className="cart-top-items">
                                <div className="cart-items">
                                    <div className="items-choose">
                                        <span className="blue-checkbox-new checkbox-on"><a> </a></span>
                                    </div>
                                    <div className="items-thumb">
                                        <img src={item.item.cover}  alt="" />
                                        <a href="" > </a>
                                    </div>
                                    <div className="name hide-row" >
                                        <div className="name-table">
                                            <a href="" >{item.item.title + ' - ' + item.item.name}</a>
                                            <ul className="attribute">
                                                <li>透明</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="operation">
                                        <a className="items-delete-btn" > </a>
                                    </div>
                                    <div className="subtotal">¥ { item.item.price.toFixed(2)  * item.quantity }</div>
                                    <div className="item-cols-num">
                                        <div className="select js-select-quantity">
                                            <span className="down down-disabled">-</span>
                                            <span className="num">
                                                    <input type="text" defaultValue={ item.quantity } style={{display: "inline-block"}} />
                                                    <ul>
                                                        <li>1</li>
                                                        <li>2</li>
                                                    </ul>
                                                </span>
                                            <span className="up">+</span>

                                        </div>
                                    </div>
                                    <div className="price">¥ {item.item.price.toFixed(2) }</div>
                                </div>
                            </div>
                        )

                    } )
                }

            </div>
        )
    }
}

export default CartList;