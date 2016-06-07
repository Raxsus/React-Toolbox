import React from 'react';

import style from './style';

export const FacetNode = ({ onClick, node, selected }) => {

    const nodeClass = () =>{
        return `${style.facetNode} ${(selected ? (' ' + style.selected) : '')}`;
    };

    return (
        <div className={nodeClass()} onmouseup={() => onClick(node.facet, node.name)}>
            <div className={style.facetNodeTitle}>{node.name}</div>
            <div className={style.facetNodeLegend}>{node.facet} Jon Snow !!!!</div>
        </div>
    )
};
