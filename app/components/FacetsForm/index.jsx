import React from 'react';

import Facet from '../Facet/index.jsx'

import style from './style';


class FacetsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: style.hidden, isOpen: false};
        this.currentFacet = null;
    }



    render () {
       var onOpen = facet => {
           if (this.currentFacet){
               this.currentFacet.close();
           }
            this.currentFacet = facet;
        };

        var facets = ['Category', 'Brand', 'Size', 'Price'].map(function(facetName) {
            return (
                <Facet label={facetName} onOpen={onOpen} />
            );
        });

        return (
            <div className={style.facetsForm}>
                {facets}
            </div>
        );
    }
}

export default FacetsForm;