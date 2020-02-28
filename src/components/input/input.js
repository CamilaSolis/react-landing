import React from 'react';
import './input.scss';

const Input = ({ name, id, placeholder }) => {
  return(
    <div className="input">
    <input type='text' name={name} id={id} />
    <div className="input__line">
    </div>
    <label htmlFor={name}>
      {placeholder}
    </label>
    </div>
  )
}

export default Input;