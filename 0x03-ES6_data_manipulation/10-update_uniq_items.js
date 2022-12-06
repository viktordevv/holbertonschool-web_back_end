/* Create a function named updateUniqueItems that returns an updated map
for all items with initial quantity at 1. */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  for (const i of map) if (i[1] === 1) map.set(i[0], 100);
  return map;
}
