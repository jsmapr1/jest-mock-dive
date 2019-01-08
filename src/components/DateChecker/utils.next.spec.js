import { createEmployee, isAtLeastTwoWeeks, isValid, message } from './utils.next';

describe('iso weekend', () => {
  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2019-01-02')).toEqual(message);
  })

  it('should return no message', () => {
    expect(isAtLeastTwoWeeks('2019-01-21')).toEqual('');
  })

  it('should validate', () => {
    expect(isValid('bea@morgan.com')).toBeTruthy();
  })

  it('should validate', () => {
    expect(isValid('beamorgan')).toBeFalsy();
  })

  it.skip('should validate', () => {
    expect(isValid('bea@morgan')).toBeFalsy();
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

  it.skip('should convert firstName to name', () => {
    const blank = createEmployee({ firstName: 'Dyan'});
    const expected = {
      name: 'Dyan',
      position: '',
      key: "3"
    };
    expect(blank).toEqual(expected);
  })

})
