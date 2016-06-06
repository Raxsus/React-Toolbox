export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const OPEN_FACET_LIST = 'OPEN_FACET_LIST';


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

export function openFacetList(id) {
    return {
        type: OPEN_FACET_LIST,
        id
    }
}
