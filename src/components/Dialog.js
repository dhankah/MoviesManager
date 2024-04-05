import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate  } from 'react-router-dom';
import '../styles/Dialog.css';

const Dialog = ({ title, children }) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/');
  };

  return ReactDOM.createPortal(
    <div className = 'modal-overlay'>
      <div className='modal'>
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
          <div>{children}</div>
          </div>
    </div>,
    document.body
  );
};

export default Dialog;