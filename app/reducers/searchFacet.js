import {
    OPEN_FACET_LIST
} from '../actions';


// TODO: check searchData and save current category in the another place of store.
export const searchFacet = (state = {
    label: '',
    items: [],
    isOpend: false
}, action) => {
    switch (action.type) {
        case OPEN_FACET_LIST:
            console.log(action.current, state.label);
            return Object.assign({}, state, {
                isOpend: action.current == state.label
            });
        default:
            return state;
    }
}
