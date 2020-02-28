import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import './alert.scss';

const Alert = ({ text }) =>{
  return(
  <div className="alert">
    <div className="alert__icon">
    <FontAwesomeIcon icon={faInfo} />
    </div>
    <div className="alert__text">
      {text}
    </div>
  </div>
  )
}

export default Alert;