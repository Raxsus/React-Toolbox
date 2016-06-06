import { combineReducers } from 'redux'
import { searchData } from './searchData';
import { searchItems } from './searchItems';
import { searchCategories } from './searchCategories';
import { searchCredentials } from './searchCredentials';
import { searchFacet } from './searchFacet';


const shopApp = combineReducers({
    searchCredentials,
    searchData,
    searchCategories,
    searchItems,
    searchFacet
})

export default shopApp
