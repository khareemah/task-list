import React, { useEffect } from 'react';

const Alert = ({ type, message, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      return clearInterval(timeout);
    };
  }, [list]);
  return <div className={type}>{message}</div>;
};

export default Alert;
