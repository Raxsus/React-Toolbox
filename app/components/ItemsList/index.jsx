import React from 'react';

import style from './style';

import data from './data'


class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: data};
    }

    render () {

        var items = this.state.data.map(function(item) {
            return (
                <div>
                    <img src={item.itemwebpictureurl}/>
                </div>
            );
        });

        return (
            <div className={style.content}>
                {items}
            </div>
        );
    }
}

export default ItemsList;
