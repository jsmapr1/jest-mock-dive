import { createEmployee, } from './utils.next';

describe.skip('createEmployee', () => {
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

  it('should convert firstName to name', () => {
    const blank = createEmployee({ firstName: 'Dyan'});
    const expected = {
      name: 'Dyan',
      position: '',
      key: "3"
    };
    expect(blank).toEqual(expected);
  })
})
