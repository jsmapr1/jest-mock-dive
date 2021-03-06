import { createEmployee, } from './utils.next';

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
      key: "1"
    };
    expect(blank).toEqual(expected);
  })

  it('should convert firstName to name', () => {
    const blank = createEmployee({ firstName: 'Dyan'});
    const expected = {
      name: 'Dyan',
      position: '',
      key: "1"
    };
    expect(blank).toEqual(expected);
  })

  it.skip('should convert firstName to name', () => {
    uniqueId.jddmockImplementationOnce(() => '2')
    const blank = createEmployee({ firstName: 'Dyan'});
    const expected = {
      name: 'Dyan',
      position: '',
      key: "1"
    };
    expect(blank).toEqual(expected);
  })
})
