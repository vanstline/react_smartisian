
import { GET_ITEMS, GET_CARTS, JOIN_CART } from '../Api/apis';
import axios from 'axios';


export const getItem = () => {

    return dispatch  => {
        fetch( GET_ITEMS ).then( res => {
            return res.json()
        } ).then( ({data}) => {
            // console.log(data)
            dispatch( {
                type: 'UPDATE_ITEMS',
                data: data
            } )
        } )
    }
};

/*
* 获取指定用户的购物车数据
* */
export const getCarts = ( uid ) => {

    return dispatch => {
        fetch( `${GET_CARTS}?uid=${uid}` ).then( res => {
            return res.json();
        } ).then( ({data}) => {
            dispatch({
                type: 'CARTS_UPDATE',
                data
            })
        } )
    }
};

/*
* 添加商品到购物车
* */

export const addCart = ( uid, itemId ) => {

    return dispatch => {
        axios( JOIN_CART, {
            method: 'POST',
            data: `uid=${uid}&item_id${itemId}`
        } ).then( ({data}) => {
            console.log(uid, itemId)
            dispatch( getCarts(uid, itemId) );

        } )
    }

};