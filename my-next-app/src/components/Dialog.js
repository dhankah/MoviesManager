import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Dialog.module.css';

const Dialog = ({ title, children }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  

  return isMounted ? ReactDOM.createPortal(
    <div className = {styles.modal}>
          <h2 className={styles.title}>{title}</h2>
          {children}
    </div>,
    document.body
  ): null;
};

export default Dialog;