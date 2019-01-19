import { isAtLeastTwoWeeks, message } from './utils';
import moment from 'moment';
jest.mock('moment');

moment.mockImplementation(() => ({
  add: () => {},
  isAfter: () => false
}));

describe.skip('iso weekend', () => {
  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2018-02-02')).toEqual(message);
  })

  it('should return no message', () => {
    moment.mockImplementationOnce(() => ({
      add: () => {},
      isAfter: () => true
    }));
    expect(isAtLeastTwoWeeks('2018-01-14')).toBeFalsy();
  })

  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2018-02-02')).toEqual(message);
  })

})
