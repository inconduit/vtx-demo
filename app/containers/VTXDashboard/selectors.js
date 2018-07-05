import { createSelector } from 'reselect';

const selectVTXDashboard = (state) => state.get('dashboard');

const makeSelectAccount = () => createSelector(
  selectVTXDashboard,
  (dashboardState) => dashboardState.get('account')
);

const makeSelectTokenBalance = () => createSelector(
  selectVTXDashboard,
  (dashboardState) => dashboardState.get('tokenBalance')
);

const makeSelectTransactionLogs = () => createSelector(
  selectVTXDashboard,
  (dashboardState) => dashboardState.get('transactionLogs')
);

export {
  selectVTXDashboard,
  makeSelectAccount,
  makeSelectTokenBalance,
  makeSelectTransactionLogs
};
