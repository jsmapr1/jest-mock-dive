import moment from 'moment';
export function isAtLeastTwoWeeks(date) {
  return moment(date).isAfter(moment().add(2, 'weeks'));
}
