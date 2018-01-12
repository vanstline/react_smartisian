import React, { Component } from 'react';
import { connect } from 'react-redux';
import './goodsList.css';

import { getItem } from '../../redux/action';
import List from "../Item/item";

// console.log(HOST);

// fetch(HOST+ITEM).then( res => {
//     return res.json()
// } ).then( data => {
//     console.log(data)
// } )
// Apis.getItem()


class Main extends Component {

    componentDidMount() {
        if( !this.props.items.length ) {
            this.props.dispatch( getItem() );
        }
    }

    render() {
        var items = this.props.items.filter( item => {
            return item.children;
        } );

        items = items.map( item => {
            /*
            * 把原本 item 的 children 的数组 换成对象
            * */
            var newItem = Object.assign( {}, item );
            newItem.children = newItem.children.map( child => {
                // console.log(child)
                return this.props.items.find( it => {
                    return Number( it.id ) === Number( child )
                } )
            } )
            // console.log(newItem)
            return newItem
        } )

        // console.log( items )

        return (
            <div  className="sku-box store-content">
                <div  className="sort-option">
                    <ul  className="line clear">
                        <li><a href=" "  className="active">综合排序</a></li>
                        <li><a href=" "  className="">销量排序</a></li>
                        <li><a href=" "  className="">价格低到高</a></li>
                        <li><a href=" "  className="">价格高到低</a></li>
                    </ul>
                </div>
                <div  className="gray-box">
                    <div  className="item-box">
                        {
                            items.map( item => {
                                return <List key={item.id} data={ item } />
                            })
                        }
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
    }
)(Main);
