import React from 'react';
import Button from 'react-toolbox/lib/button';
import { List, ListItem } from 'react-toolbox/lib/list';
import {SearchFacetNode} from '../../containers'

import style from './style';




export const Facet = ({ onClick, onNodeClick, item, isOpen, id }) => {

    const buttonClass = () =>{
        return `${style.facetButton} ${(isOpen ? (' ' + style.selected) : '')}`;
    };

    const contentClass = () =>{
        return `${style.facetNodes} ${(isOpen ? style.visible : style.hidden)}`;
    };

    // parse list of facet nodes
    let list = [];
    for (let i in item.facets) {
        list.push({name: i});
    }

    return (
        <div className={style.facet}>

            <Button label={item.name} onMouseUp={() => onClick(id)} className={buttonClass()} />

            <div className={contentClass()}>

                <List ripple selectable>
                    {list.map( node =>
                        <ListItem className={style.facetNode}
                                  itemContent={<SearchFacetNode nodeName={node.name} facetName={id}/>}
                                  key={node.name}
                                  onClick={() => onNodeClick(id, node.name)}/>
                    )}
                </List>

            </div>

        </div>
    )
};
