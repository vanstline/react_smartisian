import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RemoveCartMold, Toggle } from '../../redux/action';

class CartList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            n: 0
        }
    }

    componentDidMount() {

        this.getCheck()

    }

    RemoveCartClass = ( item ) => {
        // console.log(item);
        this.props.dispatch( RemoveCartMold( 1, item) );
        // console.log('操作完毕')
    };

    getCheck() {

        let n = this.props.carts.reduce( (prev, current) => {
            return {
                n: prev.n + (current.checked ? 1 : 0)
            }
        }, { n: 0 } );

        this.setState({
            n
        });

    }

    Check  = (item) => {

        this.props.dispatch( Toggle( 1, item.id ) )

        this.getCheck();

    } ;

    render() {


        let { carts } = this.props;

        return (
            <div>
                {
                    carts.map( item => {

                        return (

                            <div key={ item.id } className="cart-top-items">
                                <div className="cart-items">
                                    <div className="items-choose">
                                        {
                                            // console.log(item.checked)
                                        }
                                        <span
                                            className={ item.checked ? 'blue-checkbox-new checkbox-on' : 'blue-checkbox-new' }
                                            onClick={ () => this.Check(item) }
                                            ><a> </a>
                                        </span>
                                    </div>
                                    <div className="items-thumb">
                                        <img src={item.item.cover}  alt="" />
                                        <a href="" > </a>
                                    </div>
                                    <div className="name hide-row" >
                                        <div className="name-table">
                                            <a href="" >{item.item.title + ' - ' + item.item.name}</a>
                                            <ul className="attribute">
                                                <li>{item.item.sub_title}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="operation">
                                        <a className="items-delete-btn" onClick={ () => this.RemoveCartClass(item.itemId)} > </a>
                                    </div>
                                    <div className="subtotal">¥ { item.item.price.toFixed(2)  * item.quantity }</div>
                                    <div className="item-cols-num">
                                        <div className="select js-select-quantity">
                                            <span className="down down-disabled">-</span>
                                            <span className="num">
                                                <input type="text" defaultValue={ item.quantity } style={{display: "inline-block"}} />
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

// export default connect( state => {
//     return {
//         Carts: state.Carts
//     }
// } )(CartList);

export default connect( state => {
    return {
        carts: state.carts
    }
} )(CartList);
