export const square = number => number * number;

export function getCompanyName(information = {}) {
  if(!Object.keys(information).length) {
    return '';
  }
  const { name, city, country, countryCode, state, province } = information;
  const territory = state || province;
  const territoryCode = countryCode && territory ? `${countryCode}-${territory}` : territory;
  const location = [city, territoryCode, country].filter(Boolean).join(', ')
  if(!location) {
    return name;
  }
  return `${name} [${location}]`;
}
