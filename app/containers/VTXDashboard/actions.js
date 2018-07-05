import {
  LOAD_ACCOUNT,
  LOAD_ACCOUNT_SUCCESS,
  LOAD_TOKEN_BALANCE,
  LOAD_TOKEN_BALANCE_SUCCESS,
  LOAD_CONTRACT_ERROR,
  LOAD_VTX_DATA,
  TRANSFER,
  TRANSFER_SUCCESS
} from './constants';

export function loadAccount() {
  return {
    type: LOAD_ACCOUNT
  };
}

export function loadAccountSuccess(account) {
  return {
    type: LOAD_ACCOUNT_SUCCESS,
    account
  };
}

export function loadTokenBalance() {
  return {
    type: LOAD_TOKEN_BALANCE
  };
}

export function loadTokenBalanceSuccess(tokenBalance, tokenDecimals) {
  return {
    type: LOAD_TOKEN_BALANCE_SUCCESS,
    tokenBalance,
    tokenDecimals
  };
}

export function loadVTXData() {
  return {
    type: LOAD_VTX_DATA
  }
}

export function loadContractError(error) {
  return {
    type: LOAD_CONTRACT_ERROR,
    error
  };
}

export function transfer(toAddress, amount) {
  return {
    type: TRANSFER,
    amount,
    toAddress
  }
}

export function transferSuccess(transactionLog) {
  return {
    type: TRANSFER_SUCCESS,
    transactionLog
  }
}
