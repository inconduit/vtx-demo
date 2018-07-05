import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

const VTXTransactionListItem = (props) => {
  const { item } = props;
  const content = (
    <div>
      transaction: {item.transactionHash}
    </div>
  );

  return (
    <ListItem item={content} />
  );
}

VTXTransactionListItem.propTypes = {
  item: PropTypes.object,
};

export default VTXTransactionListItem;
