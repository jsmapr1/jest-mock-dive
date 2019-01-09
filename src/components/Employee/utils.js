import uniqueId from 'lodash/uniqueId'

export function createEmployee(details) {
  return {
    name: '',
    position: '',
    ...details,
    key: uniqueId(),
  }
}
