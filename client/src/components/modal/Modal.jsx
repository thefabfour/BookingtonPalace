import React from 'react';

import Backdrop from './backdrop/Backdrop';
import classes from './Modal.module.css'

export default function Modal({show, close}) {
  return (
    <>
      <Backdrop show={show} clicked={close}/>
      <div
        className={classes.modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
      </div>
    </>
  );
}