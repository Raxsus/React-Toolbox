import {
    REQUEST_SHOP_ITEMS
} from '../actions';


// TODO: use changeValue and changeGroup values.
export const searchData = (state = {
    query: '',
    params: {}
}, action) => {
    switch (action.type) {
        case REQUEST_SHOP_ITEMS:
            return {
                query: action.query,
                params: action.params
            }
        default:
            return state;
    }
}
