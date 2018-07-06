import React from 'react';
import { array } from 'prop-types';
import List from 'components/List';
import VTXTransactionListItem from 'components/VTXDashboard/VTXTransactionListItem';
import './styles.scss'

const VTXTransactionList = (props) => (
  <div className="vtx-transaction-list">
    <h2 className="header">
      Transaction List
    </h2>

    {props.items && props.items.length > 0
      ? <List
          items={props.items}
          component={VTXTransactionListItem} />
      : <h4>No transactions yet</h4>}
  </div>
);

VTXTransactionList.propTypes = {
  items: array.isRequired
}

export default VTXTransactionList;
