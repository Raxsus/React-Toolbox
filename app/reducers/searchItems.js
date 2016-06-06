import {
    RECIEVE_SHOP_ITEMS
} from '../actions';


export const searchItems = (state = {
    data: {
        hits: [],
    }
}, action) => {
    switch (action.type) {
        case RECIEVE_SHOP_ITEMS:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
}
