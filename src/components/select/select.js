import React from 'react';
import './select.scss';

const Select = ({ comunas }) =>{
  return (
    <select>
      {
        comunas.map((comuna) => (
        <option>{comuna.name}</option>
        ))
      }
    </select>
  )
}

export default Select;