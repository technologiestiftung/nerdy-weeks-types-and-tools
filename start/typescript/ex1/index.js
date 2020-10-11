// @ts-check

// count the boogies and add 2
/**
 * @param {string} str The string we want to find
 * @param {number} num The number to increment
 * @param {string[]} arr The array of string sto check
 * @returns {number}
 */
function main(str, num, arr) {
  let count = 0;
  for (const item of arr) {
    if (item === str) {
      count += num;
    }
  }
  return count;
}
const message = `Bang bang the boogie to the boogie Say up jump the boogie to the bang bang boogie`;

const result = main("boogie", 1, message.split(" "));
console.log("boogies:", result);
