import { connect } from 'react-redux';
import {FacetNode} from '../components/FacetNode';

const hasSelected = (facets, facetName, nodeName) => {
    let facet =  facets[facetName];
    return (facet && facet.find(i => i == nodeName)) || false;
};

const mapStateToProps = (state, ownProps) => {

    return {
        selected: hasSelected(state.searchFacets.facets, ownProps.facetName, ownProps.nodeName),
        nodeName: ownProps.nodeName,
        facetName: ownProps.facetName
    }
};

export const SearchFacetNode = connect(
    mapStateToProps
)(FacetNode);
