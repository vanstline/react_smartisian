
import {
    GET_ITEMS,
    GET_CARTS,
    JOIN_CART,
    REMOVE_MOLD,
    TOGGLE,
    TOGGLE_ALL,
    REMOVE_SELECTED,
    ORDER
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
        } ).then( () => {
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

    // 这里的 fetch 方法需要设置 相关头信息

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
            // console.log(data);
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
        } ).then( () => {
            // console.log(data);
            dispatch( getCarts( uid ) )
        } )
    }
};


/*
* 删除购物车中选中的商品
* */
export const RemoveSeleted = ( uid ) => {
  return dispatch => {
      axios( REMOVE_SELECTED, {
          method: 'POST',
          data: `uid=${uid}`
      } ).then( () => {
          dispatch( getCarts( uid ) )
      } )
  }
};


// /*
// * 获取已经选中的商品
// * */
// export const getSelected = () => {
//
// };


/*
* 获取订单信息
* */
export const getOrder = (uid) => {
  return dispatch => {
      // axios( ORDER, {
      //     method: 'GET',
      //     data: `uid=${uid}`
      // } ).then( (res) => {
      //     console.log(res)
      // } )

      axios(ORDER + '?uid=1').then( res => {
          console.log(res,330)
      })
  }
};