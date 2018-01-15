import React, { Component } from 'react';
import OrderHeader from "../OrderHeader/orderHeader";
import { connect } from 'react-redux';
import { getOrder } from '../../redux/action';

class OrderList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: {
                year: '',
                mounth: '',
                day: '',
                orderNum: ''
            }
        }
    }

    componentDidMount() {

        let info = { };

        let date = new Date();
        info.year = date.getFullYear().toString();
        info.mounth = addZero(date.getMonth() + 1);
        info.day = addZero(date.getDate());

        info.orderNum =  ( Date.parse(date) / 1000 ).toString();
        console.log(info);

        /*
        * 日期补0
        * */
        function addZero( date ) {
            if( date < 10 ) {
                return '0' + date
            } else {
                return date.toString()
            }
        }

        this.setState({
            info
        })

        setTimeout(()=> {
            console.log(this.state.info)
        }, 100)

    }

    OO = () => {
      this.props.dispatch( getOrder(1) )
    };


    render() {



        console.log( this.props );
        return (
            <div className="js-list-inner">
                <div className="box-inner order-cart order-list-cart clear">
                    {
                        this.state.info.year != '' && <OrderHeader info={this.state.info} />
                    }
                    <div className="cart">
                        {
                            this.props.data.map( item => {
                                return (
                                    <div className="cart-items clear" key={ item.id }>
                                        <div className="prod-info clear">
                                            <div className="items-thumb">
                                                <a href="" target="_blank"><img src={item.item.cover} alt="" /></a>
                                            </div>
                                            <div className="items-params clear">
                                                <div className="name vh-center">
                                                    <a href="" target="_blank" title={ item.item.title + ' (' + item.item.name + ')' }>
                                                        { item.item.title + ' (' + item.item.name + ')' }
                                                    </a>
                                                </div>
                                                <div className="detail"></div>
                                            </div>
                                            <div className="num">{item.quantity}</div>
                                            <div className="price">¥ {item.item.price.toFixed(2)}</div>
                                        </div>
                                    </div>
                                )
                            } )
                        }


                    </div>
                    <div className="prod-operation">
                        <div className="total">¥ { this.props.Price.toFixed(2) }</div>
                        <div className="status">
                            <a className="blue-small-btn js-payment-order"
                                onClick={this.OO}
                            >现在付款 </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  connect()(OrderList);