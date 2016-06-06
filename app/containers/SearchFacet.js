import { connect } from 'react-redux';
import {Facet} from '../components/Facet';
import { openFacetList } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        // TODO: use selectors (take from sagas and move to another place)
        item: state.searchCategories.items.find(i => i.name == ownProps.label),
        isOpen: state.searchFacets.current == ownProps.label,
        id: ownProps.label
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(openFacetList(id));
        }
    }
}

export const SearchFacet = connect(
    mapStateToProps,
    mapDispatchToProps
)(Facet);
