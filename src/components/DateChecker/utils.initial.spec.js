import { isAtLeastTwoWeeks,  message } from './utils';

describe('iso weekend', () => {
  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2019-01-02')).toEqual(message);
  })

  it('should return no message', () => {
    expect(isAtLeastTwoWeeks('2019-08-15')).toEqual('');
  })
})
