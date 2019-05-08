import * as utils from '../utils/pin-utils';

describe('convertIsoDate', () => {
  it('Converts date from ISO format', () => {
    expect(utils.convertIsoDate('2017-05-02T10:44:43.000Z')).toBe('2017-05-02 at 10:44:43');
    expect(utils.convertIsoDate('2018-05-02T10:44:43.000Z')).toBe('2018-05-02 at 10:44:43');
    expect(utils.convertIsoDate('2019-05-03T10:44:43.000Z')).toBe('2019-05-03 at 10:44:43');
  });
  it('Returns empty string if given invalid formatted string', () => {
    expect(utils.convertIsoDate('2017-05-02T10:44:43Z')).toBe('');
    expect(utils.convertIsoDate('2017-05-02t10:44:43.000Z')).toBe('');
    expect(utils.convertIsoDate('2017-05-02 at 10:44:43.000Z')).toBe('');
  });
});
