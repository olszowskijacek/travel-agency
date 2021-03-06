import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionNumber = ({ 
  currentValue,
  limits, 
  setOptionValue }) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
      type="number"
    />
  </div>
);


OrderOptionNumber.propTypes = {
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};



export default OrderOptionNumber;