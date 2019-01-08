import { createEmployee, isAtLeastTwoWeeks, isValid, message } from './utils';

describe('iso weekend', () => {
  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2019-01-02')).toEqual(message);
  })

  it('should return no message', () => {
    expect(isAtLeastTwoWeeks('2019-02-02')).toEqual('');
  })

  it('should validate', () => {
    expect(isValid('bea@morgan.com')).toBeTruthy();
  })

  it('should validate', () => {
    expect(isValid('beamorgan')).toBeFalsy();
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
