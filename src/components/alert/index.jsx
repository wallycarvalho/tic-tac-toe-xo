import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './alert.module.css';

const cs = classnames.bind(styles);

export default function Alert({
  expireIn,
  children,
  shouldShow,
  onDisappear,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldShow) { setIsVisible(true); }
  }, [shouldShow]);

  useEffect(() => {
    let disappearTime;
    const time = setTimeout(() => {
      setIsVisible(false);
      disappearTime = setTimeout(() => {
        onDisappear();
      }, expireIn);
    }, expireIn);

    return () => {
      clearTimeout(time);
      clearTimeout(disappearTime);
    };
  }, [shouldShow]);

  if (!shouldShow) {
    return null;
  }

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
  shouldShow: PropTypes.bool,
  onDisappear: PropTypes.func,
};

Alert.defaultProps = {
  expireIn: undefined,
  children: undefined,
  shouldShow: false,
  onDisappear: () => {},
};
