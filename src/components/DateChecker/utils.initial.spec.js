import { isAtLeastTwoWeeks,  message } from './utils';

describe.skip('iso weekend', () => {
  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2019-01-02')).toEqual(message);
  })

  it('should return no message', () => {
    expect(isAtLeastTwoWeeks('2019-02-02')).toEqual('');
  })
})
