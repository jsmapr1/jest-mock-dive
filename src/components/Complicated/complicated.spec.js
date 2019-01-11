import { square, getCompanyName } from './complicated';

describe('square', () => {
  it('should be a simple function', () => {
    expect(square(2)).toEqual(4);
  })
})

describe('getCompanyName', () => {
  it('should return empty string if no name', () => {
    expect(getCompanyName()).toEqual('');
  })

  it('should return company name', () => {
    const name = "JoeTech";
    expect(getCompanyName({ name })).toEqual(name);
  })

  it('should return company name with country', () => {
    const name = "JoeTech";
    const country = "Freedonia"
    expect(getCompanyName({ country, name })).toEqual('JoeTech [Freedonia]');
  })

  it('should return company name with country and country code', () => {
    const name = "JoeTech";
    const country = "Freedonia";
    const countryCode = 'FA';
    const state = 'Joergia';
    expect(getCompanyName({ country, countryCode, name, state })).toEqual('JoeTech [FA-Joergia, Freedonia]');
  })
})
