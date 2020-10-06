/* eslint-disable */
// @ts-nocheck
// count the boogies and add 2
function main(str, num, arr) {
  let count = 0;
  for (const item of arr) {
    if (item === str) {
      count += num;
    }
  }
}
const message = `Bang bang the boogie to the boogie Say up jump the boogie to the bang bang boogie`;

const result = main();
console.log("boogies:", result);
