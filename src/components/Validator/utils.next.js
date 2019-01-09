import validator from 'validator';
/* istanbul ignore file */

export function isValid(email) {
  if(/@/.test(email)) {
    return true;
  }
  return validator.isEmail(email);
}
