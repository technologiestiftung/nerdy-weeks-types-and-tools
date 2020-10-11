/* eslint-disable @typescript-eslint/no-unused-vars */
//  ▄▄▄       ██▀███   ██▀███   ▄▄▄     ▓██   ██▓  ██████
// ▒████▄    ▓██ ▒ ██▒▓██ ▒ ██▒▒████▄    ▒██  ██▒▒██    ▒
// ▒██  ▀█▄  ▓██ ░▄█ ▒▓██ ░▄█ ▒▒██  ▀█▄   ▒██ ██░░ ▓██▄
// ░██▄▄▄▄██ ▒██▀▀█▄  ▒██▀▀█▄  ░██▄▄▄▄██  ░ ▐██▓░  ▒   ██▒
//  ▓█   ▓██▒░██▓ ▒██▒░██▓ ▒██▒ ▓█   ▓██▒ ░ ██▒▓░▒██████▒▒
//  ▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░  ██▒▒▒ ▒ ▒▓▒ ▒ ░
//   ▒   ▒▒ ░  ░▒ ░ ▒░  ░▒ ░ ▒░  ▒   ▒▒ ░▓██ ░▒░ ░ ░▒  ░ ░
//   ░   ▒     ░░   ░   ░░   ░   ░   ▒   ▒ ▒ ░░  ░  ░  ░
//       ░  ░   ░        ░           ░  ░░ ░           ░
//                                       ░ ░
// Arrqys and Objects
const simpleNumberArray = [1, 2, 3, 4];
// could also be written like this below
const otherSimpleNumberArray: Array<number> = [1, 2, 3, 4];
// -----
const simpleStringArray = ["Yo", "yo", "yo", "yo", "yo", "yo!"];

/*
 */

const twoDimArray = [
  ["yo", "yeah"],
  ["yum", "bum"],
];
// could also be like this below
const twoDimArrayAgain: Array<Array<string>> = [
  ["yo", "yeah"],
  ["yum", "bum"],
];

//  ███▄ ▄███▓ ██▓▒██   ██▒▓█████ ▓█████▄
// ▓██▒▀█▀ ██▒▓██▒▒▒ █ █ ▒░▓█   ▀ ▒██▀ ██▌
// ▓██    ▓██░▒██▒░░  █   ░▒███   ░██   █▌
// ▒██    ▒██ ░██░ ░ █ █ ▒ ▒▓█  ▄ ░▓█▄   ▌
// ▒██▒   ░██▒░██░▒██▒ ▒██▒░▒████▒░▒████▓
// ░ ▒░   ░  ░░▓  ▒▒ ░ ░▓ ░░░ ▒░ ░ ▒▒▓  ▒
// ░  ░      ░ ▒ ░░░   ░▒ ░ ░ ░  ░ ░ ▒  ▒
// ░      ░    ▒ ░ ░    ░     ░    ░ ░  ░
//        ░    ░   ░    ░     ░  ░   ░
//                                 ░
// this is not cool dude.
const mixedNuts = ["cashew", true, 1];
/*
 */
//
//
//
//
//

// ▄▄▄█████▓ █    ██  ██▓███   ██▓    ▓█████   ██████
// ▓  ██▒ ▓▒ ██  ▓██▒▓██░  ██▒▓██▒    ▓█   ▀ ▒██    ▒
// ▒ ▓██░ ▒░▓██  ▒██░▓██░ ██▓▒▒██░    ▒███   ░ ▓██▄
// ░ ▓██▓ ░ ▓▓█  ░██░▒██▄█▓▒ ▒▒██░    ▒▓█  ▄   ▒   ██▒
//   ▒██▒ ░ ▒▒█████▓ ▒██▒ ░  ░░██████▒░▒████▒▒██████▒▒
//   ▒ ░░   ░▒▓▒ ▒ ▒ ▒▓▒░ ░  ░░ ▒░▓  ░░░ ▒░ ░▒ ▒▓▒ ▒ ░
//     ░    ░░▒░ ░ ░ ░▒ ░     ░ ░ ▒  ░ ░ ░  ░░ ░▒  ░ ░
//   ░       ░░░ ░ ░ ░░         ░ ░      ░   ░  ░  ░
//             ░                  ░  ░   ░  ░      ░

// there is a special array type called tuple
const tuple: [string, boolean, number] = ["cashew", true, 1];
// since version 4.0 we can give them names
// which makes it mor ereadable
const namedTuple: [str: string, bool: boolean, num: number] = [
  "cashew",
  true,
  1,
];
/*
 */
