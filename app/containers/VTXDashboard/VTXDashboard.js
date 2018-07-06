import React, { PureComponent } from 'react';
import { func, object, string } from 'prop-types';
import VTXAddress from '../../components/VTXDashboard/VTXAddress';
import VTXBalance from '../../components/VTXDashboard/VTXBalance';
import VTXTransferForm from '../../components/VTXDashboard/VTXTransferForm';
import VTXTransactionList from '../../components/VTXDashboard/VTXTransactionList';
import './styles.scss';

class VTXDashboard extends PureComponent {
  componentDidMount() {
    this.props.loadVTXData();

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(formValues) {
    this.props.transfer(formValues.toAddress, formValues.amount)
  }

  render () {
    const { account, balance, decimals, transactionLogs } = this.props
    const transactionsArray = transactionLogs.toArray()

    return (
      <div>
        <div className="main-wrapper">
          <VTXAddress address={account} />

          <VTXBalance
            balance={balance}
            decimals={decimals} />

          <VTXTransferForm onSubmit={this.handleSubmit} />
        </div>

        <VTXTransactionList items={transactionsArray} decimals={decimals} />
      </div>
    )
  }
}

VTXDashboard.propTypes = {
  account: string,
  balance: object,
  decimals: object,
  transfer: func.isRequired,
  transactionLogs: object
};

export default VTXDashboard
