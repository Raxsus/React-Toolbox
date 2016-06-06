import {
    OPEN_FACET_LIST
} from '../actions';


// TODO: check searchData and save current category in the another place of store.
export const searchFacets = (state = {
    current: null
}, action) => {
    switch (action.type) {
        case OPEN_FACET_LIST:
            return Object.assign({}, state, {
                current: action.id == state.current ? null : action.id
            });
        default:
            return state;
    }
}
