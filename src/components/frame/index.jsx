import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './frame.module.css';

const cs = classnames.bind(styles);

export default function Frame({ children }) {
  return (
    <div className={cs('container')}>
      {children}
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
};

Frame.defaultProps = {
  children: undefined,
};
