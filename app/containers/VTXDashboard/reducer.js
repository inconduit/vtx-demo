import { fromJS } from 'immutable';

import {
  LOAD_ACCOUNT_SUCCESS,
  LOAD_TOKEN_BALANCE_SUCCESS,
  TRANSFER_SUCCESS
} from './constants';

const initialState = fromJS({
  account: null,
  tokenBalance: null,
  tokenDecimals: null,
  transactionLogs: []
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACCOUNT_SUCCESS:
      return state
        .set('account', action.account);
    break;

    case LOAD_TOKEN_BALANCE_SUCCESS:
      return state
        .set('tokenBalance', action.tokenBalance)
        .set('tokenDecimals', action.tokenDecimals)
     break;

     case TRANSFER_SUCCESS:
      const { transactionLog } = action
      const amount = transactionLog.args.value
      const newBalance = state.get('tokenBalance').minus(amount)

      return state
        .set('tokenBalance', newBalance)
        .update('transactionLogs',
          transactionLogs => transactionLogs.push(transactionLog))
        break;

    default:
      return state;
  }
}

export default dashboardReducer;
