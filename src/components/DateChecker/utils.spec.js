import { createEmployee, isAtLeastTwoWeeks, isValid } from './utils';
import moment from 'moment';
import validator from 'validator';
jest.mock('moment');
jest.mock('validator');

describe.skip('iso weekend', () => {
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

  it('should create a blank employee', () => {
    const blank = createEmployee();
    const expected = {
      name: '',
      position: '',
      key: "1"
    };
    expect(blank).toEqual(expected);
  })

  it('should create use existing details when creating employee', () => {
    const blank = createEmployee({ name: 'Dyan'});
    const expected = {
      name: 'Dyan',
      position: '',
      key: "2"
    };
    expect(blank).toEqual(expected);
  })
})
