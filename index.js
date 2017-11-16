
const stringifyObjectWithBigNumber = (obj, bigNumberKeys) => {
  const noNeedConvert = !bigNumberKeys || !bigNumberKeys.length || !obj;
  if (noNeedConvert) {
    return JSON.stringify(obj);
  }
  const copiedObj = Object.assign({}, obj);
  bigNumberKeys.forEach((ele) => {
    delete copiedObj[ele];
  });
  const jsonData = Object.keys(obj).reduce((accumulator, currentValue) => {
    const keyValueMapArray = [`"${currentValue}"`];
    if (bigNumberKeys.includes(currentValue)) {
      keyValueMapArray.push(obj[currentValue]);
    } else {
      keyValueMapArray.push(JSON.stringify(obj[currentValue]));
    };
    accumulator.push(keyValueMapArray.join(':'));
    return accumulator;
  }, []);
  return ['{', jsonData.join(', '), '}'].join('');
};

module.exports = {
  stringifyObjectWithBigNumber
};
