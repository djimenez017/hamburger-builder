import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
        <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <Navigationitems />
    </nav>
  </header>
);

export default toolbar;