import React from 'react';
import { object } from 'prop-types';
import './style.scss';

const VTXBalance = (props) => (
  <div className="vtx-balance">
    <h1>
      Balance
    </h1>

    <h2>
      {props.balance
        ? props.balance.toString()
        : null}
    </h2>
  </div>
);

VTXBalance.propTypes = {
  balance: object,
  decimals: object
};

export default VTXBalance;
