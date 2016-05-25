import React from 'react';

import AppBar from 'react-toolbox/lib/app_bar';
import DrawerMenu from '../Drawer/drawer.jsx'
import Search from '../Search/index.jsx'
import Facet from '../Facet/index.jsx'

import style from './style';

const Header = () => (
  <AppBar className={style.appbar} flat>
    <DrawerMenu />
      <Search />
      <Facet />
  </AppBar>
);

export default Header;
