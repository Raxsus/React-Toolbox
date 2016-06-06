export const REQUEST_SHOP_ITEMS = 'REQUEST_SHOP_ITEMS';
export const RECIEVE_SHOP_ITEMS = 'RECIEVE_SHOP_ITEMS';
export const REQUEST_SHOP_CATEGORIES = 'REQUEST_SHOP_CATEGORIES';
export const RECIEVE_SHOP_CATEGORIES = 'RECIEVE_SHOP_CATEGORIES';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export function recieveShopItems(data, query, params) {
    return {
        type: RECIEVE_SHOP_ITEMS,
        data
    }
}

export function recieveShopCategories(categories) {
    return {
        type: RECIEVE_SHOP_CATEGORIES,
        categories
    }
}

export function requestShopItems(query, params) {
    return {
        type: REQUEST_SHOP_ITEMS,
        query,
        params
    }
}

export function requestShopItemsInCategory(query, category) {
    const params = category ? {
        facets: 'taxonomy',
        filters: 'taxonomy:"' + category + '"'
    } : {};
    return requestShopItems(query, params);
}

export function requestShopCategories(query) {
    return {
        type: REQUEST_SHOP_CATEGORIES,
        query,
        params: {
            facets: '*'
        }
    }
}

export function changeValue(value) {
    return {
        type: CHANGE_VALUE,
        value
    }
}

export function changeCategory(value, category) {
    return {
        type: CHANGE_CATEGORY,
        value,
        category
    }
}
