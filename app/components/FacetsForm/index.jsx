// import React from 'react';
//
// import Facet from '../Facet/index.jsx'
//
// import style from './style';

// import data from './data'
//
//
// class FacetsForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {class: style.hidden, isOpen: false};
//         this.currentFacet = null;
//     }
//
//
//
//     render () {
//         var onOpen = facet => {
//             if (this.currentFacet){
//                 this.currentFacet.close();
//             }
//             this.currentFacet = facet;
//         };
//
//         var facets = ['Category', 'Brand', 'Size', 'Price'].map(function(facetName) {
//             return (
//                 <Facet label={facetName} onOpen={onOpen} key={facetName} data={data[facetName]} />
//             );
//         });
//
//         return (
//             <div className={style.facetsForm}>
//                 {facets}
//             </div>
//         );
//     }
// }
//
// export default FacetsForm;

import React from 'react';

import Facet from '../Facet/index.jsx'

import style from './style';

export const FacetsForm = ({ items }) => {
    return (
        <div className={style.facetsForm}>
            {items.map(function(item) {
            return (
                <Facet label={item.name} key={item.name} data={item.facets} />
            );
         })}

        </div>
    )
};