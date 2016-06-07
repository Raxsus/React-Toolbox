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
            let facet = {};
            let facetNodes = state.facets[action.facetName] || [];
            if (facetNodes.find(node=>node==action.nodeName)){
                facet[action.facetName] = facetNodes.filter( i => i != action.nodeName);
            } else{
                facet[action.facetName] = [action.nodeName, ...facetNodes];
            }

            let facets = {facets: Object.assign({}, state.facets, facet)};

            return Object.assign({}, state, facets);
        default:
            return state;
    }
}
