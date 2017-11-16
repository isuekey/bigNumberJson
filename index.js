
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

module.exports = {
  stringifyObjectWithBigNumber
};
