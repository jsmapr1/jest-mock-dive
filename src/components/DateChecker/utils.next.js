import moment from 'moment';
import validator from 'validator';
import uniqueId from 'lodash/uniqueId'

export const message = 'Date must be two weeks from now'

export function isAtLeastTwoWeeks(date) {
  const isLater = moment(date).isAfter(moment().add(2, 'weeks'));
  return isLater ? '' : message;
}

export function isValid(email) {
  return /@/.test(email);
}

export function createEmployee(details) {
  const { firstName: name, ...rest } = details;

  return {
    name: name || '',
    position: '',
    ...rest,
    key: uniqueId(),
  }
}

// export function createEmployee(details = {}) {
//   const { firstName: name, ...rest } = details;
// 
//   return {
//     name: name || '',
//     position: '',
//     ...rest,
//     key: uniqueId(),
//   }
// }
