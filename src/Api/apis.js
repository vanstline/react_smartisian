
const HOST = 'http://localhost:9999/';
const ITEM = 'item';

export default {
    getItem(){
        return dispatch  => {
            fetch( HOST + ITEM ).then( res => {
                     return res.json()
                } ).then( ({data}) => {
                    // console.log(data)
                    dispatch( {
                        type: 'UPDATE_ITEMS',
                        data: data
                    } )
                } )
        }
    }
}

