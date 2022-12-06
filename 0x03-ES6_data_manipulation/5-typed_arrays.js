/* Create a function named createInt8TypedArray that returns a new ArrayBuffer */

export default function createInt8TypedArray(length, position, value) {
  if (position > length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  return view;
}
