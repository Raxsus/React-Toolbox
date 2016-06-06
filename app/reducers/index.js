import { combineReducers } from 'redux'
import { searchData } from './searchData';
import { searchItems } from './searchItems';
import { searchCategories } from './searchCategories';
import { searchCredentials } from './searchCredentials';
import { searchFacets } from './searchFacets';


const shopApp = combineReducers({
    searchCredentials,
    searchData,
    searchCategories,
    searchItems,
    searchFacets
})

export default shopApp
