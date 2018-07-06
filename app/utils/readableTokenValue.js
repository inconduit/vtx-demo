export default (bigNum, decimalPlaces = 0) => {
  return bigNum.div(Math.pow(10, decimalPlaces)).toString();
}
