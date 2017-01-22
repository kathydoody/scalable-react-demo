/**
*
* AppBar
*
*/

import React from 'react';
import IconButton from '../IconButton';
import { Link } from 'react-router'

import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {

  const loginLink =  email || (<Link to="/login">login</Link>);

  return (
    <div className={styles.appBar}>
          <IconButton
            icon="bars"
            buttonClass={styles.iconButton}
            iconClass={styles.icon}
            onClick={toggleDrawer}
           />

      <div
          className={styles.heading}
      >
        Kathy Link Library
      </div>
      <div
        className={styles.linkContainer}
      >
        { loginLink }
        </div>
    </div>
  );
}

AppBar.PropTypes = {
  email: React.PropTypes.string.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
