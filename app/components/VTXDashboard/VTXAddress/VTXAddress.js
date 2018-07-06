import React from 'react';
import { string } from 'prop-types';
import './style.scss';

const VTXAddress = (props) => (
  <div className="vtx-address">
    <h2>
      Address
    </h2>

    <h4>
      {props.address}
    </h4>
  </div>
);

VTXAddress.propTypes = {
  address: string
};

export default VTXAddress;
