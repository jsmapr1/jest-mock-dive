import { isValid } from './utils.next';

describe.skip('Validator', () => {
  it('should validate pass a good email', () => {
    expect(isValid('bea@morgan.com')).toBeTruthy();
  })

  it('should include a .something', () => {
    expect(isValid('bea@morgan')).toBeFalsy();
  })

  it('should invalidate a bad email', () => {
    expect(isValid('beamorgan')).toBeFalsy();
  })
})
