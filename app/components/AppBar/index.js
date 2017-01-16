/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome'

import styles from './styles.css';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
      <div
        className={styles.iconButton}
        onClick={toggleDrawer}
       >
          <FontAwesome
            className={styles.icon}
            name="bars"
           />
      </div>
      <div
          className={styles.heading}
      >
        Kathy Link Library
      </div>
      <div
        className={styles.linkContainer}
      >
        log in
        </div>
    </div>
  );
}

AppBar.PropTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
