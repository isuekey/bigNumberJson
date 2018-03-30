function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// code is come from: https://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers

const stringifyObjectWithBigNumber = (obj, bigNumberKeys) => {
  const noNeedConvert = !bigNumberKeys || !obj
          || !bigNumberKeys.length
          || !(bigNumberKeys.some((ele) =>{
            return !!obj[ele];
          }));
  if (noNeedConvert) {
    return JSON.stringify(obj);
  }
  const jsonData = Object.keys(obj).reduce((accumulator, currentValue) => {
    const keyValueMapArray = [`"${currentValue}"`];
    if (bigNumberKeys.includes(currentValue)) {
      keyValueMapArray.push(obj[currentValue]);
    } else {
      keyValueMapArray.push(`${JSON.stringify(obj[currentValue])}`);
    };
    accumulator.push(keyValueMapArray.join(':'));
    return accumulator;
  }, []);
  return ['{', jsonData.join(', '), '}'].join('');
};

const stringifyObjectWithBigNumberAuto = (obj) => {
  if (!obj) {
    return JSON.stringify(obj);
  }
  const jsonData = Object.keys(obj).reduce((accumulator, currentKey) => {
    const currentValue = obj[currentKey];
    if (typeof currentValue == 'undefined') {
      return accumulator;
    }
    const keyValueMapArray = [`"${currentKey}"`];
    if (isNumeric(currentValue) && (typeof currentValue == 'number' || typeof currentValue == 'string')) {
      keyValueMapArray.push(currentValue);
    } else {
      keyValueMapArray.push(`${JSON.stringify(currentValue)}`);
    };
    accumulator.push(keyValueMapArray.join(":"));
    return accumulator;
  },[]);
  return ['{', jsonData.join(','), '}'].join('');
};

module.exports = {
  stringifyObjectWithBigNumber,
  stringifyObjectWithBigNumberAuto
};


exports.printMsg = function() {
  console.log("This is a message from the demo package");
};
