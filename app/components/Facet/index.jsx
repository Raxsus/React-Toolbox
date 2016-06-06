import React from 'react';
import Button from 'react-toolbox/lib/button';
import { List, ListItem } from 'react-toolbox/lib/list';

import style from './style';

class ItemContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: false};
    }

    toggle = () => {
        console.log('toggle - ' + this.props.data.name);
        this.setState({selected: !this.state.selected});
        console.log(this.state.selected);
    };

    getClassName = () => {
        console.log('getClassName - ' + this.props.data.name);
        return style.facetNode + (this.state.selected && style.selected)
    }





    render () {
        return (
            <div className={this.getClassName} onClick={this.toggle}>
                <div className={style.facetNodeTitle}>{this.props.data.name}</div>
                <div className={style.facetNodeLegend}>Jon Snow !!!!</div>
            </div>

        );
    }
}




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
                <ListItem className={style.facetNode}
                          itemContent={<ItemContent data={node}/>}
                    caption={node.name}
                    legend=" 'Jon Snow' Osterman"
                    key={node.name}
                />
            );
        });

        return (
        <div className={style.facet}>

            <Button label={this.props.label} onMouseUp={this.toggle} className={this.buttonClass()} />

            <div className={style.facetNodes + ' ' + this.state.class }>
                <List ripple selectable>
                    {facetNodes}
                </List>
            </div>

        </div>
        );
    }
}

export default Facet;
