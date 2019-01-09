import uniqueId from 'lodash/uniqueId'
/* istanbul ignore file */

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
