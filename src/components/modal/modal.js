import React from 'react';
import Button from './../button/button';
import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <Button 
            text="Cerrar"
            action={handleClose}
            />
      </section>
    </div>
  );
};

export default Modal;