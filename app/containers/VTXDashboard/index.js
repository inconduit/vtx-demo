import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import VTXDashboard from './VTXDashboard';
import {
  loadVTXData,
  transfer
} from './actions';

import {
  makeSelectAccount,
  makeSelectTokenBalance,
  makeSelectTransactionLogs
} from './selectors';

const mapDispatchToProps = (dispatch) => ({
  loadVTXData: () => dispatch(loadVTXData()),
  transfer: (toAddress, amount) => dispatch(transfer(toAddress, amount))
});

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
  tokenBalance: makeSelectTokenBalance(),
  transactionLogs: makeSelectTransactionLogs()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(withReducer, withSaga, withConnect)(VTXDashboard);
export { mapDispatchToProps };
