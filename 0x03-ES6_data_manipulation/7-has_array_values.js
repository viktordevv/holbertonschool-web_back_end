/* Create a function named hasValuesFromArray that returns a boolean if all the elements */
export default function hasValuesFromArray(set, array) {
  return array.every((i) => set.has(i));
}
