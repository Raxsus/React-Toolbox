import React from 'react';

import Dropdown from 'react-toolbox/lib/dropdown';

const countries = [
    { value: 'EN-gb', label: 'England' },
    { value: 'ES-es', label: 'Spain'},
    { value: 'TH-th', label: 'Thailand' },
    { value: 'EN-en', label: 'USA'}
];

class Facet extends React.Component {
    state = {
        value: 'ES-es',
    };

    handleChange = (value) => {
        this.setState({value: value});
    };

    render () {
        return (
            <Dropdown
                auto
                onChange={this.handleChange}
                source={countries}
                label="Categories"
            />
        );
    }
}

export default Facet;
