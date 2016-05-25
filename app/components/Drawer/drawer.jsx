import React from 'react';

import Button from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';

import style from './style';

export default class DrawerMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    open = () => this.setState({open: true});
    close = () => this.setState({open: false});

    render() {
        return (
            <div>
                
                <Button  className={style.menubutton} icon="menu" floating primary onClick={this.open} />
                
                <Drawer active={this.state.open} onOverlayClick={this.close}>
                    <h5>This is your Drawer.</h5>
                    <p>You can embed any content you want, for example a Menu.</p>
                </Drawer>
                
            </div>
        );
    }
}

export default DrawerMenu;