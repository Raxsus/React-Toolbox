export const INIT_SEARCH = 'INIT_SEARCH';
export const REINIT_SEARCH = 'REINIT_SEARCH';
export const REQUEST_SEARCH_CREDENTIALS = 'REQUEST_SEARCH_CREDENTIALS';
export const RECIEVE_SEARCH_CREDENTIALS = 'RECIEVE_SEARCH_CREDENTIALS';

export function recieveSearchCredentials(STK, STH, ALID, ALINDEX) {
    return {
        type: RECIEVE_SEARCH_CREDENTIALS,
        STK,
        STH,
        ALID,
        ALINDEX
    }
}

export function requestSearchCredentials() {
    return {
        type: REQUEST_SEARCH_CREDENTIALS
    }
}

export function initSearch() {
    return {
        type: INIT_SEARCH
    }
}

export function reinitSearch(e) {
    return {
        type: REINIT_SEARCH
    }
}
