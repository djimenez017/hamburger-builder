import React from 'react';

import classes from './Navigationitems.css';
import NavigationItem from './Navigationitem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>

    </ul>
)

export default navigationItems;