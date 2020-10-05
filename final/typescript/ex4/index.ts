/* eslint-disable @typescript-eslint/no-unused-vars */
// Arrqys and Objects

const simpleNumberArray: number[] = [1, 2, 3, 4];
// could also be written like this below
// const simpleNumberArray: Array<number> = [1, 2, 3, 4];

const simpleStringArray: string[] = ["Yo", "yo", "yo", "yo", "yo", "yo!"];

const twoDimArray: string[][] = [
  ["yo", "yeah"],
  ["yum", "bum"],
];

// could also be like this below
// const twoDimArray: Array<Array<string>> = [
//   ["yo", "yeah"],
//   ["yum", "bum"],
// ];

// mixed array
// this is not cool dude.
const mixedNuts = ["cashew", true, 1];
// there is a special array type called tuple
const tuple: [string, boolean, number] = ["cashew", true, 1];
// since version 4.0 we can give them names
const namedTuple: [str: string, bool: boolean, num: number] = [
  "cashew",
  true,
  1,
];
// which is useful wenn using them in functions with the rest operator
function someNuts(...nuts: [str: string, bool: boolean, num: number]) {
  console.log(str, bool, num);
}
