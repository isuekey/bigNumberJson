const expect = require('chai').expect;
const Big = require('big.js');
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
  const normalNumberTestData = { undef: undefined, isnull: null, normalNum:123.445, stringNumber:'1333' };
  describe(`Object is ${JSON.stringify(normalNumberTestData)}`, () => {
    const jsonStringify = JSON.stringify(normalNumberTestData);
    it(`should return ${jsonStringify}, bigNumber is undefined`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(normalNumberTestData);
      expect(json).to.be.an('string');
      expect(json).to.equal(jsonStringify);
    });
    it(`should return ${jsonStringify}, bigNumber is empty`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(normalNumberTestData, []);
      expect(json).to.be.an('string');
      expect(json).to.equal(jsonStringify);
    });
    it(`should return ${jsonStringify}, bigNumber is not empty`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(normalNumberTestData, ['testKey']);
      expect(json).to.be.an('string');
      expect(json).to.equal(jsonStringify);
    });
    it(`should return ${jsonStringify}, bigNumber is not empty`, () => {
      const json = bigJson.stringifyObjectWithBigNumber(normalNumberTestData, ['stringNumber']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{"undef":undefined, "isnull":null, "normalNum":123.445, "stringNumber":1333}');
    });
  });
  const bigNumberTestData = {testBigNumber:"12345678901234567890", testBigNumber2:new Big("123456789012345678902")};
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

describe('Object with Big Number wants JSON', () => {
  describe('Object is undefined', () => {
    it('should return undefined, bigNumberKeys is undenfied', () => {
      expect(bigJson.stringifyObjectWithBigNumberAuto(undefined)).to.be.an('undefined');
    });
    it('should return empty string, bigNumberKeys is empty', () => {
      expect(bigJson.stringifyObjectWithBigNumberAuto(undefined, [])).to.be.an('undefined');
    });
    it('should return empty string, bigNumberKeys is not empty', () => {
      expect(bigJson.stringifyObjectWithBigNumberAuto(undefined, ['testKey1'])).to.be.an('undefined');
    });
  });
  describe('Object is {}', () => {
    it('should return {}, bigNumber is undefined', () => {
      expect(bigJson.stringifyObjectWithBigNumberAuto({})).to.be.an('string');
      expect(bigJson.stringifyObjectWithBigNumberAuto({})).to.equal('{}');
    });
    it('should return {}, bigNumber is empty', () => {
      const json = bigJson.stringifyObjectWithBigNumberAuto({},[]);
      expect(json).to.be.an('string');
      expect(json).to.equal('{}');
    });
    it('should return {}, bigNumber is not empty', () => {
      const json = bigJson.stringifyObjectWithBigNumberAuto({},['testKey']);
      expect(json).to.be.an('string');
      expect(json).to.equal('{}');
    });
  });
  const normalNumberTestData = { undef: undefined, isnull: null, normalNum:123.445, stringNumber:'1333' };
  describe(`Object is ${JSON.stringify(normalNumberTestData)}`, () => {
    const jsonStringify = '{"isnull":null,"normalNum":123.445,"stringNumber":1333}';
    it(`should return ${jsonStringify}, bigNumber is undefined`, () => {
      const json = bigJson.stringifyObjectWithBigNumberAuto(normalNumberTestData);
      expect(json).to.be.an('string');
      expect(json).to.equal(jsonStringify);
    });
    it(`should return ${jsonStringify}, bigNumber is empty`, () => {
      const json = bigJson.stringifyObjectWithBigNumberAuto(normalNumberTestData, []);
      expect(json).to.be.an('string');
      expect(json).to.equal(jsonStringify);
    });
  });
  const bigNumberTestData = {testBigNumber:"12345678901234567890", testBigNumber2:new Big("123456789012345678902")};
  describe(`Object is ${JSON.stringify(bigNumberTestData)}`, () => {
    const target = '{"testBigNumber":12345678901234567890,"testBigNumber2":"123456789012345678902"}';
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber is undefined`, () => {
      const json = bigJson.stringifyObjectWithBigNumberAuto(bigNumberTestData);
      expect(json).to.be.an('string');
      expect(json).to.equal(target);
    });
    it(`should return ${JSON.stringify(bigNumberTestData)}, bigNumber is empy`, () => {
      const json = bigJson.stringifyObjectWithBigNumberAuto(bigNumberTestData,[]);
      expect(json).to.be.an('string');
      expect(json).to.equal(target);
    });
  });
});
