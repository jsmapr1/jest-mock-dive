import { isAtLeastTwoWeeks, isValid } from './utils';
import moment from 'moment';
import validator from 'validator';
jest.mock('moment');
jest.mock('validator');

describe('iso weekend', () => {
  it('should return a two week message', () => {
    moment.mockImplementation(() => ({
      add: () => {},
      isAfter: () => false
    }));
    expect(isAtLeastTwoWeeks('2018-02-02')).toBeTruthy();
  })

  it('should return no message', () => {
    const mock = () => '12/14/1982';
    mock.add = () => {};
    mock.isAfter = () => true;
    moment.mockImplementation(() => mock);
    expect(isAtLeastTwoWeeks('2018-01-14')).toBeFalsy();
  })

  it('should validate', () => {
    isValid();
    expect(validator.isEmail).toBeCalled();
  })
})
