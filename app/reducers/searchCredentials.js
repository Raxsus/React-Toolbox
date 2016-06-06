import {
    RECIEVE_SEARCH_CREDENTIALS
} from '../actions';


export const searchCredentials = (state = {
    STK: null,
    STH: null,
    ALID: null,
    ALINDEX: null
}, action) => {
    switch (action.type) {
        case RECIEVE_SEARCH_CREDENTIALS:
            console.log(action);
            return {
                STK: action.STK,
                STH: action.STH,
                ALID: action.ALID,
                ALINDEX: action.ALINDEX
            };
        default:
            return state;
    }
}
