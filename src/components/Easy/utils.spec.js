import { makeName, shuffleValues } from './utils';

describe('Easy', () => {
  it('should show positive numbers', () => {
    const account = {
      name: 'Big Money',
      balance: 1000000
    }
    expect(makeName(account)).toEqual('Big Money 1,000,000')
  })

  it('should show negative numbers', () => {
    const account = {
      name: 'Student Loans',
      balance: -1000000
    }
    expect(makeName(account)).toEqual('Student Loans (-1,000,000)')
  })
})
