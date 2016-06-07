import React from 'react';
import style from './style';

export const Item = ({ item }) => {
    return (
        <div className={style.item}>
            <a href={`#${item.saleid}/${item.itemid}`} className={style.itemLink}>
                <img src={item.itemwebpictureurl} alt={item.itemname} />
            </a>

            <div className={style.itemName}>{item.itemname}</div>
            <div className={style.itemPrice}>
                <div className={style.itemPriceOld}>${item.rrp}</div>
                <div className={style.itemPriceNew}>${item.price}</div>
            </div>
        </div>
    )
};
