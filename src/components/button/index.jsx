import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './button.module.css';

const cs = classnames.bind(styles);

export default function Button({ children, onClick }) {
  return (
    <button type="button" className={cs('base')} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  onClick: () => {},
};
