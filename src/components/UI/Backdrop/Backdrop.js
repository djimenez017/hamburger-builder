import React from 'react';

import classes from './Backdrop.css'; 
//ADD THE .CSS EXTENSION

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;

