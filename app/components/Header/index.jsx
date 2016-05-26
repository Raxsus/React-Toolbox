import React from 'react';

import AppBar from 'react-toolbox/lib/app_bar';
import DrawerMenu from '../Drawer/drawer.jsx'
import SearchForm from '../SearchForm/index.jsx'
import Avatar from 'react-toolbox/lib/avatar';

import style from './style';

const Header = () => (
  <AppBar className={style.appbar} flat fixed>
    <DrawerMenu />
    <SearchForm />
    <Avatar icon="shopping_cart" className={style.basketIcon} />
  </AppBar>
);

export default Header;
