import { isAtLeastTwoWeeks } from './utils';
import moment from 'moment';

describe('iso weekend', () => {
  it('should return weekend message', () => {
    expect(isAtLeastTwoWeeks(moment().format())).toEqual(false);
    expect(isAtLeastTwoWeeks(moment().add(3, 'weeks').format())).toEqual(true);
  })
})
