import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Dialog.css';

const Dialog = ({ onClose, title, children }) => {
  return ReactDOM.createPortal(
    <div class = 'modal'>
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
          {children}
    </div>,
    document.body
  );
};

export default Dialog;