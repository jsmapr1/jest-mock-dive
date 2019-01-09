import { isAtLeastTwoWeeks, message } from './utils';
import moment from 'moment';
jest.mock('moment');

describe('iso weekend', () => {
  it('should return a two week message', () => {
    moment.mockImplementation(() => ({
      add: () => {},
      isAfter: () => false
    }));
    expect(isAtLeastTwoWeeks('2018-02-02')).toEqual(message);
  })

  it('should return no message', () => {
    moment.mockImplementation(() => ({
      add: () => {},
      isAfter: () => true
    }));
    expect(isAtLeastTwoWeeks('2018-01-14')).toBeFalsy();
  })
})
