import React from 'react';
import classnames from 'classnames/bind';
import styles from './board.module.css';

const cs = classnames.bind(styles);

export default function Board() {
  return (
    <div className={cs('container')}>
      <div className={cs('board-row')}>
        <div className={cs('square')}>1</div>
        <div className={cs('square')}>2</div>
        <div className={cs('square')}>3</div>
      </div>
      <div className={cs('board-row')}>
        <div className={cs('square')}>4</div>
        <div className={cs('square')}>5</div>
        <div className={cs('square')}>6</div>
      </div>
      <div className={cs('board-row')}>
        <div className={cs('square')}>7</div>
        <div className={cs('square')}>8</div>
        <div className={cs('square')}>9</div>
      </div>
    </div>
  );
}
