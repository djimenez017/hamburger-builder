import React from 'react';

import classes from './Modal.css';
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => (
    <Auxx>
        <Backdrop show={props.show} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxx >
);

export default modal;
