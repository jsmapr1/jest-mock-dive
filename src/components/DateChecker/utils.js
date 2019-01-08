import moment from 'moment';
import validator from 'validator';
export function isAtLeastTwoWeeks(date) {
  const isLater = moment(date).isAfter(moment().add(2, 'weeks'));
  return isLater ? '' : 'Date must be two weeks from now';
}

export function isValid(email) {
  return validator.isEmail(email);
}
