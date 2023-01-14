import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './frame.module.css';

const cs = classnames.bind(styles);

export default function Frame({ children, className }) {
  return (
    <div className={cs('container', className)}>
      {children}
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Frame.defaultProps = {
  children: undefined,
  className: undefined,
};
