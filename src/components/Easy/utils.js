export function makeName({ balance, name}) {
  const parsed = Number(balance);
  const balanceString = parsed >= 0 ? parsed.toLocaleString() : `(${parsed.toLocaleString()})`;
  return `${name} ${balanceString}`
};
