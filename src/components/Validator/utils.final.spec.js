import { isValid } from './utils';
import validator from 'validator';
const spy = jest.spyOn(validator, 'isEmail');

describe('Validator', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it.skip('should validate pass a good email', () => {
    expect(isValid('bea@morgan.com')).toBeTruthy();
    expect(validator.isEmail).toBeCalled();
  })

  it.skip('should include a .something', () => {
    expect(isValid('bea@morgan')).toBeFalsy();
    expect(validator.isEmail).toBeCalled();
  })

  it.skip('should invalidate a bad email', () => {
    expect(isValid('beamorgan')).toBeFalsy();
    expect(validator.isEmail).toBeCalled();
  })
})
