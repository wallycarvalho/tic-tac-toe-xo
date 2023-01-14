import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Layout from '../components/layout';
import Frame from '../components/frame';
import Button from '../components/button';
import Alert from '../components/alert';
import styles from '../styles/root.module.css';

const cs = classnames.bind(styles);

function Box({ children, selected, onClick }) {
  return (
    <div
      className={cs('box', { 'box-selected': selected })}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function HeaderSubCopy({ children }) {
  return (
    <span className={cs('pick-player')}>{children}</span>
  );
}

export default function Root() {
  const [playerSelection, setPlayerSelection] = useState();
  const [isFindingOpponent, setFindOpponent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onSelectionClicked = useCallback((choice) => () => {
    if (!isFindingOpponent) {
      setPlayerSelection(choice);
    }
  }, [isFindingOpponent]);

  const onMatchClicked = useCallback(() => {
    if (typeof playerSelection === 'undefined') {
      setShowAlert(true);
      return;
    }
    setFindOpponent(true);
  }, [playerSelection]);

  const onAlertDisappear = useCallback(() => {
    setShowAlert(false);
  }, []);

  const isXSelected = playerSelection === 'x';
  const isOSelected = playerSelection === 'o';

  return (
    <Layout>
      <Frame className={cs('container')}>
        <Alert
          expireIn={3000}
          shouldShow={showAlert}
          onDisappear={onAlertDisappear}
        >
          Please make a choice
        </Alert>
        <h2>
          Welcome
        </h2>
        {!isFindingOpponent ? (
          <HeaderSubCopy>Pick your player</HeaderSubCopy>
        ) : (
          <HeaderSubCopy>Waiting to find your opponent...</HeaderSubCopy>
        )}
        <div className={cs('selection-container')}>
          <Box onClick={onSelectionClicked('x')} selected={isXSelected}>
            X
          </Box>
          <Box onClick={onSelectionClicked('o')} selected={isOSelected}>
            O
          </Box>
        </div>
        {!isFindingOpponent && (
          <Button wide onClick={onMatchClicked}>
            Match me with my opponent
          </Button>
        )}
      </Frame>
    </Layout>
  );
}

Box.propTypes = {
  children: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  children: '',
  selected: false,
  onClick: () => {},
};

HeaderSubCopy.propTypes = {
  children: PropTypes.string,
};

HeaderSubCopy.defaultProps = {
  children: '',
};
