import { createEmployee, } from './utils';

describe.skip('iso weekend', () => {
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
