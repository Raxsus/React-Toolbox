import {
    OPEN_FACET_LIST,
    SELECT_FACET_NODE
} from '../actions';


// TODO: check searchData and save current category in the another place of store.
export const searchFacets = (state = {
    current: null,
    facets: {}
}, action) => {
    switch (action.type) {
        case OPEN_FACET_LIST:
            return Object.assign({}, state, {
                current: action.id == state.current ? null : action.id
            });
        case SELECT_FACET_NODE:
            let facetNode = action.name;
            return Object.assign({}, state, {
                facets: {}//state.facets action.facet
            });
        default:
            return state;
    }
}
