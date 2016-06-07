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
        this.setState({selected: !this.state.selected});
    };

    getClassName = () => {
        return style.facetNode + (this.state.selected && style.selected)
    };





    render () {
        return (
            <div className={this.getClassName} onClick={this.toggle}>
                <div className={style.facetNodeTitle}>{this.props.data.name}</div>
                <div className={style.facetNodeLegend}>{this.props.facet} Jon Snow !!!!</div>
            </div>

        );
    }
}
//
//
//
//
// class Facet extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {class: style.hidden, isOpen: false};
//     }
//
//     toggle = () => {
//         if(this.state.isOpen){
//             this.close();
//         } else{
//             this.open();
//         }
//
//     };
//
//     close = () => {
//         this.setState({class: style.hidden, isOpen: false});
//     };
//
//     open = () => {
//         if (this.props.onOpen){
//             this.props.onOpen(this);
//         }
//         this.setState({class: style.visible, isOpen: true});
//     };
//
//     buttonClass = () =>{
//         return style.facetButton +  (this.state.isOpen ? (' ' + style.selected) : '');
//     }
//
//     render () {
//         let list = [];
//         for (let i in this.props.data) {
//             list.push({name: i, count: this.props.data[i]});
//         }
//
//         var facetNodes = list.map(function(node) {
//             return (
//                 <ListItem className={style.facetNode}
//                           itemContent={<ItemContent data={node}/>}
//                     caption={node.name}
//                     legend=" 'Jon Snow' Osterman"
//                     key={node.name}
//                 />
//             );
//         });
//
//         return (
//                 <div className={style.facet}>
//
//                     <Button label={item.name} onMouseUp={onClick} className={this.buttonClass()} />
//
//                     <div className={style.facetNodes + ' ' + this.state.class }>
//                         <List ripple selectable>
//                             {facetNodes}
//                         </List>
//                     </div>
//
//                 </div>
//         );
//     }
// }
//
// export default Facet;

export const Facet = ({ onClick, item, isOpen, id }) => {

    const buttonClass = () =>{
        return `${style.facetButton} ${(isOpen ? (' ' + style.selected) : '')}`;
    };

    const contentClass = () =>{
        return `${style.facetNodes} ${(isOpen ? style.visible : style.hidden)}`;
    };

    // parse list of facet nodes
    let list = [];
    for (let i in item.facets) {
        list.push({name: i});
    }

    return (
        <div className={style.facet}>

            <Button label={item.name} onMouseUp={() => onClick(id)} className={buttonClass()} />

            <div className={contentClass()}>

                <List ripple selectable>

                    {list.map( node =>
                        <ListItem className={style.facetNode}
                                  itemContent={<ItemContent data={node} facet={id}/>}
                                  caption={node.name}
                                  legend=" 'Jon Snow' Osterman"
                                  key={node.name}/>
                    )}

                </List>

            </div>

        </div>
    )
};
