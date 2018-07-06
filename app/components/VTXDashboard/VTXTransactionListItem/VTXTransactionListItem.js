import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { Col, Row } from 'smooth-ui';
import readableTokenValue from 'utils/readableTokenValue';
import './styles.scss'

const VTXTransactionListItem = (props) => {
  const { item } = props;
  const tokenValue = readableTokenValue(item.args.value, 18);
  const content = (
    <div className="transaction-list-item">
      <Row>
        <Col xs={2}>
          tx hash:
        </Col>

        <Col>
          {item.transactionHash}
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          from:
        </Col>

        <Col>
          {item.args.from}
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          to:
        </Col>

        <Col>
          {item.args.to}
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          value:
        </Col>

        <Col>
          {tokenValue}
        </Col>
      </Row>
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
