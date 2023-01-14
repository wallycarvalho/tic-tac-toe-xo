import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './button.module.css';

const cs = classnames.bind(styles);

export default function Button({
  children,
  onClick,
  className,
  wide,
}) {
  return (
    <button
      type="button"
      className={cs(
        'base',
        {
          wide,
        },
        className,
      )}
      onClick={onClick}
    >
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
  className: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  children: undefined,
  onClick: () => {},
  className: undefined,
  wide: false,
};
