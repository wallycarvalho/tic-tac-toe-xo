import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './alert.module.css';

const cs = classnames.bind(styles);

export default function Alert({ expireIn, children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsVisible(false);
    }, expireIn);

    return () => clearTimeout(time);
  }, []);

  return (
    <div className={cs(
      'base',
      {
        visible: isVisible,
        hidden: !isVisible,
      },
    )}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  expireIn: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
};

Alert.defaultProps = {
  expireIn: undefined,
  children: undefined,
};
