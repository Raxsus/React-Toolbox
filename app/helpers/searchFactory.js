import algoliasearch from 'algoliasearch';

export function createSearch({ALID, ALINDEX, STK, STH}) {
    const client = algoliasearch(ALID, STK),
          index = client.initIndex(ALINDEX);
    client.setExtraHeader('X-Algolia-QueryParameters', STH);
    return index;
}
