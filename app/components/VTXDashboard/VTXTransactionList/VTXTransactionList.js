import React from 'react';
import { array } from 'prop-types';
import List from 'components/List';
import VTXTransactionListItem from 'components/VTXDashboard/VTXTransactionListItem';

const VTXTransactionList = (props) => (
  <List items={props.items} component={VTXTransactionListItem} />
);

VTXTransactionList.propTypes = {
  items: array.isRequired
}

export default VTXTransactionList;
