export default function hasValuesFromArray(setArr, arr) {
  return arr.every((val) => setArr.has(val));
}
