import { connect } from 'react-redux';
import Facet from '../components/Facet';
import { openFacetList } from '../actions';

const mapStateToProps = (state) => {
    return {
        // TODO: use selectors (take from sagas and move to another place)
        items: state.searchCategories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (value) => {
            dispatch(openFacetList(value));
        }
    }
}

export const SearchFacet = connect(
    mapStateToProps,
    mapDispatchToProps
)(Facet);
