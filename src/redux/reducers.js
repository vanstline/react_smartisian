
import { combineReducers } from 'redux';

import items from './items';
import carts from './carts';

// const reducers = combineReducers({
//     items,
//     carts
// });

export default combineReducers({
    items,
    carts
});