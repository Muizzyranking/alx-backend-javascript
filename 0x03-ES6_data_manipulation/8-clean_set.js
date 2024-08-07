export default function cleanSet(set, startString) {
  if (!startString || startString === undefined || startString === '' || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((str) => ((str || (str !== undefined)) ? str.startsWith(startString) : ''))
    .map((str) => ((str || (str !== undefined)) ? str.slice(startString.length) : ''))
    .join('-');
}
