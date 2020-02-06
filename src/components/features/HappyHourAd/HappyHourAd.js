import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  render(){
    return(
      <div className={styles.component}>
        <h3 className={styles.title}></h3>
        <div className={styles.countdown}></div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};


export default HappyHourAd;