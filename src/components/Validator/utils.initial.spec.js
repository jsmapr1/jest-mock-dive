import { isValid } from './utils';

describe('validator', () => {
  it('should validate', () => {
    expect(isValid('bea@morgan.com')).toBeTruthy();
  })

  it('should validate', () => {
    expect(isValid('beamorgan')).toBeFalsy();
  })
})
