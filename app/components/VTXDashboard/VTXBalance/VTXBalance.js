import React from 'react';
import { object } from 'prop-types';
import './style.scss';
import readableTokenValue from 'utils/readableTokenValue';

const VTXBalance = (props) => {
  const balance = props.balance !== null
    ? readableTokenValue(props.balance, props.decimals)
    : null
  return (
    <div className="vtx-balance">
      <h2>
        Balance
      </h2>

      <h4>
        {balance ? balance : null}
      </h4>
    </div>
  );
}

VTXBalance.propTypes = {
  balance: object,
  decimals: object
};

export default VTXBalance;
