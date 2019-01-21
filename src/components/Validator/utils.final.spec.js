import { isValid } from './utils';
import validator from 'validator';
const spy = jest.spyOn(validator, 'isEmail');

describe.skip('Validator', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should validate pass a good email', () => {
    expect(isValid('bea@morgan.com')).toBeTruthy();
    expect(validator.isEmail).toBeCalled();
  })
})
