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

    buttonClass = () =>{
        return style.facetButton +  (this.state.isOpen ? (' ' + style.selected) : '');
    }

    render () {
        let list = [];
        for (let i in this.props.data) {
            list.push({name: i, count: this.props.data[i]});
        }

        var facetNodes = list.map(function(node) {
            return (
                <li className={style.facetNode} key={node.name}>{node.name} - {node.count}</li>
            );
        });

        return (
        <div className={style.facet}>

            <Button label={this.props.label} onMouseUp={this.toggle} className={this.buttonClass()} />

            <ul className={style.facetNodes + ' ' + this.state.class }>
                {facetNodes}
            </ul>

        </div>
        );
    }
}

export default Facet;
