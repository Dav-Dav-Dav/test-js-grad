
module.exports = function sortArray(arr) {
  // TODO
  if( arr.every(x => typeof x === "number") ) {
    return arr.sort((a, b) => a - b);
  }
  else {
    const wrongType = TypeError("Wrong type given, expected number");
    return wrongType.message;
  }
  
};
