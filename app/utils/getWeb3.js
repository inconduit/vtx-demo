import Web3 from 'web3'

const getWeb3 = () => {
  return typeof window.web3 !== 'undefined'
    ? new Web3(web3.currentProvider)
    : new Web3.providers.HttpProvider('http://127.0.0.1:9545')
}

export default getWeb3
