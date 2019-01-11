import uniqueId from 'lodash/uniqueId'
/* istanbul ignore file */

export function createEmployee(details) {
  return {
    name: '',
    position: '',
    ...details,
    key: uniqueId(),
  }
}
