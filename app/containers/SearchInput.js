import { connect } from 'react-redux';
import { changeValue } from '../actions';
import { SearchField } from '../components/SearchField';

const mapStateToProps = (state) => {
    return {
        // TODO: use selectors (take from sagas and move to another place)
        value: state.searchData.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (value) => {
            dispatch(changeValue(value));
        }
    }
}

export const SearchInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchField);




