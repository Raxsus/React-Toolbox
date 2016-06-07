import { connect } from 'react-redux';
import {Item} from '../components/Item';

const mapStateToProps = (state, ownProps) => {
    return {
        item: ownProps.data
    }
};

export const SearchItem = connect(
    mapStateToProps
)(Item);
