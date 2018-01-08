import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/action';
import { connect } from 'react-redux';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            default: this.props.data.children[0]
        }

    }

    chooseItem = (child) => {

        this.setState({
            default: child
        })

    };


    /*
    * 添加商品到购物车
    * */
    joinCart = () => {
        // console.log(this.state.default.id, this.state.default.pid)
        let addItem = this.state.default;
        this.props.dispatch( addCart( 1, addItem.id ) );
        console.log(1)
        // this.props.dispatch( addCart(1, addItem.id) );
    };

    getColorList() {
        return (
            this.props.data.children.map( child => {
                return (
                    <li key={child.id} onMouseOver={ () => this.chooseItem(child) } >
                        <a href=" "  className={ child.id === this.state.default.id ? "active" : ''}>
                            <img src={child.color} alt="" /></a>
                    </li>
                )
            })
        )
    }

    render() {
        // console.log( this.props, 222 )
        let item = this.props.data;
        // console.log(item)
        return (

            <div className="item">
                <div>
                    <div  className="item-img"><img alt={this.state.default.sub_title} src={this.state.default.cover} style={{opacity: 1}} />
                    </div>
                    <h6>{item.title + ' -- ' + this.state.default.name}</h6>
                    <h3 >{item.sub_title}</h3>
                    <div  className="params-colors">
                        <ul  className="colors-list">
                            {
                               this.getColorList()
                            }
                        </ul>
                    </div>
                    <div  className="item-btns clearfix">
                        <span  className="item-gray-btn">
                            <Link to={"/detail/" + this.state.default.id}>查看详情</Link>
                        </span>
                        <span className="item-blue-btn" onClick={ this.joinCart } >加入购物车 </span>
                    </div>
                    <div  className="item-price clearfix">
                        <i>¥</i><span>{this.state.default.price}</span>
                    </div>
                    <div  className="discount-icon">false</div>
                    <div  className="item-cover">
                        <a href="" target="_blank"> </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect()(List);