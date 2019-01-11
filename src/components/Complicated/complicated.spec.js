import { square, getCompanyName } from './complicated';

describe.skip('square', () => {
  it('should be a simple function', () => {
    expect(square(2)).toEqual(4);
  })
})

describe.('getCompanyName', () => {
  it.skip('should return empty string if no name', () => {
    expect(getCompanyName()).toEqual('');
  })

  it.skip('should return company name', () => {
    const name = "JoeTech";
    expect(getCompanyName({ name })).toEqual(name);
  })

  it.skip('should return company name with country', () => {
    const name = "JoeTech";
    const country = "Freedonia"
    expect(getCompanyName({ country, name })).toEqual('JoeTech [Freedonia]');
  })

  it.skip('should return company name with country and country code', () => {
    const name = "JoeTech";
    const country = "Freedonia";
    const countryCode = 'FA';
    const state = 'Joergia';
    expect(getCompanyName({ country, countryCode, name, state })).toEqual('JoeTech [FA-Joergia, Freedonia]');
  })
})
