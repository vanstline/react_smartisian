import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItem } from '../../redux/action';
import './detail.css';

class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            n: 0
        }
    }

    componentDidMount() {
        if( !this.props.items.length ) {
            this.props.dispatch( getItem() );
        }
    }

    chooseItem = (index) => {
        this.setState({
            n: index
        })
    }

    getSub = (baroItem, curItem) => {
        // console.log(curItem)
        // 利用当前商品 获取它的兄弟商品

        return baroItem.map( child => {
            // console.log(child,555)
            return (
                <li className={child.id === curItem.id ? "cur" : ""} key={child.id}>
                    <Link to={'/detail/' + child.id}>
                        <i>
                            <img src={child.color} title={child.name} alt={child.name} />
                        </i>
                    </Link>
                </li>
            )
        } )
    }

    render() {
        // console.log(this.props)
        let id = Number(this.props.match.params.id);
        // console.log(id, 'id')
        let items = this.props.items;
        let curItem = {};  // 拿到当前商品的信息
        let parentItem = {};  // 拿到当前商品的 父信息
        let baroItem = [];  // 获取兄弟商品信息

        if( items.length ) {
            curItem = items.find( item => {
                // console.log(item)
                return item.id === id;
            } )

            // console.log(  parentItem, curItem,222,items )

            parentItem = items.find( item => {
                // return item.id === curItem.pid;
                return item.id === curItem.pid;
            } )

            // console.log(  parentItem , 'end1')

            // console.log(curItem,111)
            curItem = Object.assign( curItem, {
                title: parentItem.title,
                sub_title: parentItem.sub_title
            })

            baroItem = items.filter( item => {
                return item.pid === curItem.pid
            } )

        }
        // console.log(baroItem)
        // console.log(  parentItem )

        return (
            <div className="store-content item">
                <div className="item-box">
                    <div className="gallery-wrapper">
                        <div className="gallery">
                            <div className="thumbnail">
                                <ul>
                                    {
                                        curItem.album && curItem.album.map( (item, index) => {
                                            return (
                                                <li
                                                    className={ index === this.state.n ? "on" : ""  }
                                                    key={index}
                                                    onMouseOver={ () => this.chooseItem(index) }
                                                >
                                                    <img src={item} style={{width: '54px'}} alt=""/>
                                                </li>
                                            )
                                        } )
                                    }
                                    {/*<li className="on"><img src="../../img/goods/ss1.jpg" alt="" /></li>*/}
                                </ul>
                            </div>
                            <div className="thumb">
                                <ul>
                                    <li className="on">
                                        <img src={ curItem.album && curItem.album[this.state.n] } style={{width:'440px'}} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="sku-custom-title">
                            <div className="params-price">
                                <span><em>¥</em><i>199</i></span>
                            </div>
                            <div className="params-info">
                                <h4>{ curItem && curItem.title + ' - ' + curItem.name }</h4>
                                <h6>{ curItem && curItem.sub_title }</h6>
                            </div>
                        </div>
                        <div className="sku-dynamic-params-panel">
                            <div className="sku-dynamic-params clear">
                                <span className="params-name">颜色</span>
                                <ul className="params-colors">

                                    { baroItem.length && this.getSub(baroItem,curItem) }

                                    {/*<li className="cur">*/}
                                        {/*<a>*/}
                                            {/*<i>*/}
                                                {/*<img src={curItem && curItem.color} alt="" />*/}
                                            {/*</i>*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="sku-dynamic-params clear">
                                <div className="params-name">数量</div>
                                <div className="params-detail clear">
                                    <div className="item-num js-select-quantity">
                                        <span className="down down-disabled">-</span>
                                        <span className="num">1</span>
                                        <span className="up up-disabled">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sku-status">
                            <div className="cart-operation-wrapper clearfix">
                                <span className="blue-title-btn js-add-cart"><a>加入购物车</a></span>
                                <span className="gray-title-btn"><a>现在购买</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect( state => {
    return {
        items: state.items
    }
} )(Detail);