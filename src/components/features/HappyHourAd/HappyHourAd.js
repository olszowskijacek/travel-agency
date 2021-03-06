import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor() {
    super();
    
    /*run this.forceUpdate() every second*/
    setInterval(() => this.forceUpdate(), 1000);
  }
  static propTypes = {
    title: PropTypes.node,
    promoDescription: PropTypes.node,
  };

  static defaultProps = {
    title: 'Happy Hour',
    promoDescription: 'Its your time! Take advantage of Happy Hour! All offers 20% off!',
  };

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }


  render(){
    const timer = this.getCountdownTime();
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.countdown}>{timer > 82800 ? this.props.promoDescription : formatTime(timer)}</div>
      </div>
    );
  }
}

// HappyHourAd.propTypes = {
//   title: PropTypes.string,
// };


export default HappyHourAd;