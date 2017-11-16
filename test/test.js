const expect = require('chai').expect;
const bigJson = require('../index.js');

describe('Object with Big Number wants JSON', () => {
  describe('Object is undefined', () => {
    it('should return undefined, bigNumberKeys is undenfied', () => {
      expect(bigJson.stringifyObjectWithBigNumber(undefined)).to.be.an('undefined');
    });
    it('should return empty string, bigNumberKeys is empty', () => {
      expect(bigJson.stringifyObjectWithBigNumber(undefined, [])).to.be.an('undefined');
    });
    it('should return empty string, bigNumberKeys is not empty', () => {
      expect(bigJson.stringifyObjectWithBigNumber(undefined, ['testKey1'])).to.be.an('undefined');
    });
  });
  describe('Object is {}', () => {
    it('should return {}, bigNumber is undefined', () => {
      expect(bigJson.stringifyObjectWithBigNumber({})).to.be.an('string');
      expect(bigJson.stringifyObjectWithBigNumber({})).to.equal('{}');
    });
    it('should return {}, bigNumber is empty', () => {
      const json = bigJson.stringifyObjectWithBigNumber({},[]);
      expect(json).to.be.an('string');
      expect(json).to.equal('{}');
    });
    it('should return {}, bigNumber is not empty', () => {
      const json = bigJson.stringifyObjectWithBigNumber({},['testKey']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{}');
    });
  });
  const bigNumberTestData = {testBigNumber:"12345678901234567890", testBigNumber2:"123456789012345678902"};
  describe(`Object is ${JSON.stringify(bigNumberTestData)}`, () => {
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber is undefined`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(bigNumberTestData);
      expect(json).to.be.an('string');
      expect(json).to.equal(JSON.stringify(bigNumberTestData));
    });
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber is empy`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(bigNumberTestData,[]);
      expect(json).to.be.an('string');
      expect(json).to.equal(JSON.stringify(bigNumberTestData));
    });
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber has some key`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(bigNumberTestData, ['testBigNumber']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{"testBigNumber":12345678901234567890, "testBigNumber2":"123456789012345678902"}');
    });
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber has some key and extra key`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(bigNumberTestData, ['testBigNumber','testBigNumber3']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{"testBigNumber":12345678901234567890, "testBigNumber2":"123456789012345678902"}');
    });
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber has all key`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(bigNumberTestData, ['testBigNumber','testBigNumber2']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{"testBigNumber":12345678901234567890, "testBigNumber2":123456789012345678902}');
    });
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber has all key and extra key `, () => {
      const json = bigJson.stringifyObjectWithBigNumber(bigNumberTestData, ['testBigNumber','testBigNumber2', 'testBigNumber3']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{"testBigNumber":12345678901234567890, "testBigNumber2":123456789012345678902}');
    });
  });
});
