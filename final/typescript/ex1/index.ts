function main(str: string, num: number, arr: string[]): number {
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
