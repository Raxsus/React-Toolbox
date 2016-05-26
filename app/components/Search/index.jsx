import React from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import style from './style';


class SearchForm extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                <FontIcon value='search' />
                <input type='text' label='Search' name='search' className={style.searchfield} />
            </div>
        );
    }
}

export default SearchForm;
