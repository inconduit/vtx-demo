import { call, put, select, takeLatest } from 'redux-saga/effects';
import getWeb3 from 'utils/getWeb3';
import VetXTokenContract from '../../../contracts/VetXToken.json'
import { makeSelectAccount} from './selectors';

import {
  loadContractError,
  loadTokenBalanceSuccess,
  loadAccountSuccess,
  transferSuccess
} from './actions';

import {
  LOAD_ACCOUNT,
  LOAD_TOKEN_BALANCE,
  LOAD_VTX_DATA,
  TRANSFER
} from 'containers/VTXDashboard/constants';

export function* loadContract() {
  try {
    const contract = require('truffle-contract');
    const vetXTokenContract = contract(VetXTokenContract);
    const web3 = getWeb3();

    vetXTokenContract.setProvider(web3.currentProvider);
    return yield call(vetXTokenContract.deployed);
  } catch (err) {
    console.log('Error loading contract:', err);
    yield put(loadContractError(err));
  }
}

export function* loadAccount() {
  const web3 = yield call(getWeb3);
  const accounts = yield call(web3.eth.getAccounts);
  const account = accounts[0];

  yield put(loadAccountSuccess(account));
}

export function* loadTokenBalance() {
  const account = yield select(makeSelectAccount());
  const contractInstance = yield call(loadContract);
  const balance = yield contractInstance.balanceOf.call(account);
  const decimals = yield contractInstance.decimals.call();

  yield put(loadTokenBalanceSuccess(balance, decimals));
}

export function* transfer(action) {
  const { amount, toAddress } = action;
  const account = yield select(makeSelectAccount());
  const contractInstance = yield call(loadContract);
  const result = yield contractInstance
    .transfer(toAddress, amount, { from: account });
  const transactionLog = result.logs[0];

  transactionLog.id = transactionLog.transactionHash;
  yield put(transferSuccess(transactionLog));
}

export function* loadAccountAndBalance() {
  yield call(loadAccount);
  yield call(loadTokenBalance);
}

export default function* vtxData() {
  yield takeLatest(LOAD_ACCOUNT, loadAccount);
  yield takeLatest(LOAD_TOKEN_BALANCE, loadTokenBalance);
  yield takeLatest(LOAD_VTX_DATA, loadAccountAndBalance);
  yield takeLatest(TRANSFER, transfer);
}
