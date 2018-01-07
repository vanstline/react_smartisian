
export default ( items = [], action ) => {

    switch ( action.type ) {
        case 'UPDATE_ITEMS':
            // console.log(action.data)
            return [...action.data]
        default:
            return items
    }
}