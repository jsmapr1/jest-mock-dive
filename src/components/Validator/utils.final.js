import validator from 'validator';

export function isValid(email) {
  return validator.isEmail(email);
}
