import React from 'react';
import { string } from 'prop-types';
import './style.scss';

const VTXAddress = (props) => (
  <div className="vtx-address">
    <h1>
      Address
    </h1>

    <h2>
      {props.address}
    </h2>
  </div>
);

VTXAddress.propTypes = {
  address: string
};

export default VTXAddress;
