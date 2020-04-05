export const swapArrayElements = (arr, index1, index2) =>
  arr.map((val, idx) => {
    if (idx === index1) return arr[index2];
    if (idx === index2) return arr[index1];
    return val;
  });

export function findIndex(arr, entry, value) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i][entry] === value) return i;
  }
  return undefined;
}
