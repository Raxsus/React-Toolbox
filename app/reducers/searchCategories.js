import {
    RECIEVE_SHOP_CATEGORIES,
    CHANGE_CATEGORY,
    OPEN_FACET_LIST,
    CHANGE_VALUE
} from '../actions';


// TODO: check searchData and save current category in the another place of store.
export const searchCategories = (state = {
    items: [
        {name: 'Category', facets: [], isOpend: false},
        {name: 'Brand', facets: [], isOpend: false},
        {name: 'Size', facets: [], isOpend: false},
        {name: 'Price', facets: [], isOpend: false}
    ],
    current: ''
}, action) => {
    switch (action.type) {
        case RECIEVE_SHOP_CATEGORIES:
            return Object.assign({}, state, {
                items: [
                    {name: 'Category', facets: action.categories.facets.taxonomy, isOpend: state.isOpend},
                    {name: 'Brand', facets: action.categories.facets.brand, isOpend: state.isOpend},
                    {name: 'Size', facets: action.categories.facets.sizename, isOpend: state.isOpend},
                    {name: 'Price', facets: action.categories.facets.price, isOpend: state.isOpend}
                ]
            });
        case CHANGE_CATEGORY:
            return Object.assign({}, state, {
                current: action.category
            });
        case OPEN_FACET_LIST:
            return Object.assign({}, state, {
                current: action.current
            });
        case CHANGE_VALUE:
            return Object.assign({}, state, {
                current: ''
            });
        default:
            return state;
    }
}
