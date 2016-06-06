import { connect } from 'react-redux';
import { FacetsForm } from '../components/FacetsForm';

const mapStateToProps = (state) => {
    return {
        // TODO: use selectors (take from sagas and move to another place)
        items: state.searchCategories.items
    }
};

export const SearchFacets = connect(
    mapStateToProps
)(FacetsForm);
