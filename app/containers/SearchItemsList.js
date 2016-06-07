import { connect } from 'react-redux';
import {ItemsList} from '../components/ItemsList';

const shuffle = array => {
    return array.sort( () => {
        return 0.5 - Math.random();
    });
};

const mapStateToProps = (state) => {
    let items = [...new Set(state.searchItems.data.hits)];
    return {
        items: shuffle(items)
    }
};

export const SearchItemsList = connect(
    mapStateToProps
)(ItemsList);
