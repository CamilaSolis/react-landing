import React from 'react';
import './button.scss';

const Button = ({text, action}) =>{
  return(
  <button type="button" className="button" onClick={action}>
    {text}
  </button>
  )
};

export default Button