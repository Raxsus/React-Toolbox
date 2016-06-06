import React from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import style from './style';


// class SearchField extends React.Component {
//     render () {
//         return (
//             <div className={style.searchField}>
//                 <FontIcon className={style.searchIcon} value='search' />
//                 <input type='text' label='Search' placeholder="What would you like to find?" name='search' className={style.searchInput} />
//             </div>
//         );
//     }
// }

// export default SearchField;

export const SearchField = ({ onChange, value }) => {
    return (
        <div className={style.searchField}>
            <FontIcon className={style.searchIcon} value='search' />
            <input
                type='text'
                label='Search'
                placeholder="What would you like to find?"
                name='search'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={style.searchInput} />
        </div>
    )
};
