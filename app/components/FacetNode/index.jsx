import React from 'react';

import style from './style';

/*
* props:
* * facetName
* * nodeName
* */

export const FacetNode = ({ selected, nodeName, facetName }) => {

    const nodeClass = () =>{
        return `${style.facetNode} ${(selected ? (' ' + style.selected) : '')}`;
    };

    return (
        <div className={nodeClass()}>
            <div className={style.facetNodeTitle}>{nodeName}</div>
            <div className={style.facetNodeLegend}>{facetName} Jon Snow !!!!</div>
        </div>
    )
};
