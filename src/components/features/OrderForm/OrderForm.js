import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  // const url = '${settings.db.url}/${settings.db.endpoint.orders}';
  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({
  tripCost,
  tripName,
  tripId,
  countryCode,
  options,
  setOrderOption,
}) => {
  return (
    <Row>
      {pricing.map(option => {
        return (
          <Col md={4} key={option.id}>
            <OrderOption
              currentValue={options[option.id]}
              setOrderOption={setOrderOption}
              tripCost={tripCost}
              {...option}
            />
          </Col>   
        ); 
      })}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
