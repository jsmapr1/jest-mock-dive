import { isAtLeastTwoWeeks, message } from './utils';
import moment from 'moment';


describe.skip('iso weekend', () => {

  // beforeAll(() => {
  //   moment.now = () => +new Date('2019-01-09T00:00:00.000Z');
  // });

  it('should return a two week message', () => {
    expect(isAtLeastTwoWeeks('2019-01-02')).toEqual(message);
  })

  it('should return no message', () => {
    expect(isAtLeastTwoWeeks('2019-02-12')).toEqual('');
  })
})
