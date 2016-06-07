import React from 'react';
import style from './style';

import {SearchItem} from '../../containers'

export const ItemsList = ({ items }) => {
    return (
        <div>
            <div className={style.items}>
                {items.map((item, i) => <SearchItem data={item} key={item.itemid + i} />)}
            </div>
        </div>

    )
};
