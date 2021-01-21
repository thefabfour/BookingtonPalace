import React from 'react';

import classes from './Backdrop.module.css'

export default function Backdrop({show, clicked}) {
  return (
    show ? <div className={classes.bg} onClick={clicked}></div> : null
  );
}