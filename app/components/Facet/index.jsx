import React from 'react';
import Button from 'react-toolbox/lib/button';

import style from './style';

class Facet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: style.hidden, isOpen: false};
    }

    toggle = () => {
        if(this.state.isOpen){
            this.close();
        } else{
            this.open();
        }

    };

    close = () => {
        this.setState({class: style.hidden, isOpen: false});
    };

    open = () => {
        if (this.props.onOpen){
            this.props.onOpen(this);
        }
        this.setState({class: style.visible, isOpen: true});
    };

    render () {

        var facetNodes = Array.from(new Array(3), (x,i) => i).map(function(comment) {
            return (
                <li className={style.facetNode}>Cat - {comment}</li>
            );
        });

        return (
        <div className={style.facet}>

            <Button label={this.props.label} onMouseUp={this.toggle} className={style.facetButton} />

            <ul className={style.facetNodes + ' ' + this.state.class }>
                {facetNodes}
            </ul>

        </div>
        );
    }
}

export default Facet;
