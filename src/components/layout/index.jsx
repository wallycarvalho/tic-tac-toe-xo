import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './layout.module.css';

const cs = classnames.bind(styles);

export default function Layout({ children }) {
  return (
    <div className={cs('container')}>{children}</div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: undefined,
};
