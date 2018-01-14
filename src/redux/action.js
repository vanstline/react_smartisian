
import {
    GET_ITEMS,
    GET_CARTS,
    JOIN_CART,
    REMOVE_MOLD,
    TOGGLE,
    TOGGLE_ALL
} from '../Api/apis';
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
            data: `uid=${uid}&item_id=${itemId}`
        } ).then( ({data}) => {
            console.log(data);
            dispatch( getCarts(uid, itemId) );

        } )
    }

    // /*
    // * 为什么用 fetch 不行
    // * */
    // return dispatch => {
    //     fetch( JOIN_CART, {
    //         method: 'POST',
    //         data: `uid=${uid}&item_id=${itemId}`
    //     } ).then( res => {
    //         return res.json();
    //     } ).then( data => {
    //         console.log(data)
    //         dispatch( getCarts(uid, itemId) );
    //     } )
    // }

};

/*
* 删除购物车指定商品
* */
export const RemoveCartMold = ( uid, itemId ) => {
    return dispatch => {
        axios( REMOVE_MOLD, {
            method: 'POST',
            data: `uid=${uid}&item_id=${itemId}`
        } ).then( ({data}) => {
            // console.log(data);
            dispatch( getCarts(uid, itemId) );
        } )
    }
};

/*
* 购物车的单个选中
* */
export const Toggle = ( uid, cartId ) => {
    return dispatch => {
        axios( TOGGLE, {
            method: 'POST',
            data: `uid=${uid}&cart_id=${cartId}`
        } ).then( ({data}) => {
            console.log(data);
            dispatch( getCarts(uid, cartId) );
        } )
    }
};

/*
* 购物车的全选
* */
export const ToggleAll = ( uid, check ) => {
    return dispatch => {
        axios( TOGGLE_ALL, {
            method: 'POST',
            data: `uid=${uid}&checked=${check}`
        } ).then( ({data}) => {
            console.log(data);
            dispatch( getCarts( uid, check) )
        } )
    }
};
