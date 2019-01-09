import moment from 'moment';

export const message = 'Date must be two weeks from now'

export function isAtLeastTwoWeeks(date) {
  const isLater = moment(date).isAfter(moment().add(2, 'weeks'));
  return isLater ? '' : message;
}
