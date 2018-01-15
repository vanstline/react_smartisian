import React, { Component } from 'react';
import order from "../Order/order";


class OrderHeader extends Component {




    render() {

        let { info } = this.props;
        // console.log(this.props.info);

        return (
            <div className="gray-sub-title cart-title">
                <span className="date">{ `${info.year}-${info.mounth}-${info.day}` }</span>
                <span className="order-id"> 订单号： <a href="">{ info.orderNum }</a> </span>
                <span className="order-detail"><a href="">查看详情&gt; </a> </span> <span className="sub-total">应付总额</span>
                <span className="num">数量</span>
                <span className="price">单价</span>
            </div>
        )
    }
}

export default OrderHeader;