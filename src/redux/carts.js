
export default ( state = [] ,action ) => {

    switch ( action.type ) {
        case 'CARTS_UPDATE':
            // console.log(action.data);
            return action.data;
        default:
            return state
    }
}