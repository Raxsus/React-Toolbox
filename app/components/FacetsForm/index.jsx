import React from 'react';

import {SearchFacet} from '../../containers'

import style from './style';

export const FacetsForm = ({ items }) => {
    return (
        <div className={style.facetsForm}>
            {items.map(function(item) {
            return (
                <SearchFacet label={item.name} key={item.name} data={item.facets} />
            );
         })}

        </div>
    )
};