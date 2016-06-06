import { connect } from 'react-redux';
import { FacetsForm } from '../components/FacetsForm';
import { openFacetList } from '../actions';

const mapStateToProps = (state) => {
    console.log(state.searchCategories);
    return {
        // TODO: use selectors (take from sagas and move to another place)
        items: state.searchCategories.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (value) => {
            dispatch(openFacetList(value));
        }
    }
}

export const SearchFacets = connect(
    mapStateToProps,
    mapDispatchToProps
)(FacetsForm);
