/* istanbul ignore file */
import data from './data';

export default function service() {
  // Fake Ajax Call
  return new Promise((resolve, reject) => {
    resolve(data);
  }, 250);
}

