import React from 'react';

import AppBar from 'react-toolbox/lib/app_bar';
import DrawerMenu from '../Drawer/drawer.jsx'
import Search from '../Search/index.jsx'
import Facet from '../Facet/index.jsx'
import Avatar from 'react-toolbox/lib/avatar';

import style from './style';

const Header = () => (
  <AppBar className={style.appbar} flat fixed>
    <DrawerMenu />
    <div className={style.table}>
      <Search className={style.row} />
      <Facet className={style.row} label="Category" />
      <Facet className={style.row} label="Brand" />
      <Facet className={style.row} label="Size" />
      <Facet className={style.row} label="Price" />
    </div>
    <Avatar icon="shopping_cart" />
  </AppBar>
);

export default Header;
