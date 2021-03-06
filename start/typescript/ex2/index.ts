/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
//  ██▓███   ██▀███   ██▓ ███▄ ▄███▓ ██▓▄▄▄█████▓ ██▓ ██▒   █▓▓█████   ██████
// ▓██░  ██▒▓██ ▒ ██▒▓██▒▓██▒▀█▀ ██▒▓██▒▓  ██▒ ▓▒▓██▒▓██░   █▒▓█   ▀ ▒██    ▒
// ▓██░ ██▓▒▓██ ░▄█ ▒▒██▒▓██    ▓██░▒██▒▒ ▓██░ ▒░▒██▒ ▓██  █▒░▒███   ░ ▓██▄
// ▒██▄█▓▒ ▒▒██▀▀█▄  ░██░▒██    ▒██ ░██░░ ▓██▓ ░ ░██░  ▒██ █░░▒▓█  ▄   ▒   ██▒
// ▒██▒ ░  ░░██▓ ▒██▒░██░▒██▒   ░██▒░██░  ▒██▒ ░ ░██░   ▒▀█░  ░▒████▒▒██████▒▒
// ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░▓  ░ ▒░   ░  ░░▓    ▒ ░░   ░▓     ░ ▐░  ░░ ▒░ ░▒ ▒▓▒ ▒ ░
// ░▒ ░       ░▒ ░ ▒░ ▒ ░░  ░      ░ ▒ ░    ░     ▒ ░   ░ ░░   ░ ░  ░░ ░▒  ░ ░
// ░░         ░░   ░  ▒ ░░      ░    ▒ ░  ░       ▒ ░     ░░     ░   ░  ░  ░
//             ░      ░         ░    ░            ░        ░     ░  ░      ░
//                                                        ░
// Primitive types (number, string, boolean, undefined, null, void, Symbol)
// https://www.typescriptlang.org/docs/handbook/basic-types.html
//
const num = 3;
const str = "boogie";
const bool = true;
const undef = undefined;
const nil = null;
// const emptyness = void; // does not work that way
/*
 */
//
//
//
//
//
//
//
//
//   ██████▓██   ██▓ ███▄ ▄███▓ ▄▄▄▄    ▒█████   ██▓      ██████
// ▒██    ▒ ▒██  ██▒▓██▒▀█▀ ██▒▓█████▄ ▒██▒  ██▒▓██▒    ▒██    ▒
// ░ ▓██▄    ▒██ ██░▓██    ▓██░▒██▒ ▄██▒██░  ██▒▒██░    ░ ▓██▄
//   ▒   ██▒ ░ ▐██▓░▒██    ▒██ ▒██░█▀  ▒██   ██░▒██░      ▒   ██▒
// ▒██████▒▒ ░ ██▒▓░▒██▒   ░██▒░▓█  ▀█▓░ ████▓▒░░██████▒▒██████▒▒
// ▒ ▒▓▒ ▒ ░  ██▒▒▒ ░ ▒░   ░  ░░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░▓  ░▒ ▒▓▒ ▒ ░
// ░ ░▒  ░ ░▓██ ░▒░ ░  ░      ░▒░▒   ░   ░ ▒ ▒░ ░ ░ ▒  ░░ ░▒  ░ ░
// ░  ░  ░  ▒ ▒ ░░  ░      ░    ░    ░ ░ ░ ░ ▒    ░ ░   ░  ░  ░
//       ░  ░ ░            ░    ░          ░ ░      ░  ░      ░
//          ░ ░                      ░
//'Symbol' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
// yes we do. Go to tsconfig.json and change the target

const sym = Symbol("boogie");
console.log(sym);
/*
 */
//
//
//
//
//
//
//
//
//  ▄▄▄       ███▄    █▓██   ██▓
// ▒████▄     ██ ▀█   █ ▒██  ██▒
// ▒██  ▀█▄  ▓██  ▀█ ██▒ ▒██ ██░
// ░██▄▄▄▄██ ▓██▒  ▐▌██▒ ░ ▐██▓░
//  ▓█   ▓██▒▒██░   ▓██░ ░ ██▒▓░
//  ▒▒   ▓▒█░░ ▒░   ▒ ▒   ██▒▒▒
//   ▒   ▒▒ ░░ ░░   ░ ▒░▓██ ░▒░
//   ░   ▒      ░   ░ ░ ▒ ▒ ░░
//       ░  ░         ░ ░ ░
//                      ░ ░
//
// https://www.typescriptlang.org/docs/handbook/basic-types.html#any
// there ae some special types in TS
// unknow, never or any
let couldBeAnything: any;
couldBeAnything = 3;
couldBeAnything = "foo";
couldBeAnything = [];

/*
 */
//
//
//
//
//
//
//
//
//  █    ██  ███▄    █  ██ ▄█▀ ███▄    █  ▒█████   █     █░███▄    █
//  ██  ▓██▒ ██ ▀█   █  ██▄█▒  ██ ▀█   █ ▒██▒  ██▒▓█░ █ ░█░██ ▀█   █
// ▓██  ▒██░▓██  ▀█ ██▒▓███▄░ ▓██  ▀█ ██▒▒██░  ██▒▒█░ █ ░█▓██  ▀█ ██▒
// ▓▓█  ░██░▓██▒  ▐▌██▒▓██ █▄ ▓██▒  ▐▌██▒▒██   ██░░█░ █ ░█▓██▒  ▐▌██▒
// ▒▒█████▓ ▒██░   ▓██░▒██▒ █▄▒██░   ▓██░░ ████▓▒░░░██▒██▓▒██░   ▓██░
// ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒░ ▒░   ▒ ▒ ░ ▒░▒░▒░ ░ ▓░▒ ▒ ░ ▒░   ▒ ▒
// ░░▒░ ░ ░ ░ ░░   ░ ▒░░ ░▒ ▒░░ ░░   ░ ▒░  ░ ▒ ▒░   ▒ ░ ░ ░ ░░   ░ ▒░
//  ░░░ ░ ░    ░   ░ ░ ░ ░░ ░    ░   ░ ░ ░ ░ ░ ▒    ░   ░    ░   ░ ░
//    ░              ░ ░  ░            ░     ░ ░      ░            ░
// https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
let foo: unknown;
foo = 1;

const bah = 2;
if (typeof foo === "number") {
  const res = bah + foo;
}
/*
 */
//
//
//
//
//
//
//
//
//  ███▄    █ ▓█████ ██▒   █▓▓█████  ██▀███
//  ██ ▀█   █ ▓█   ▀▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
// ▓██  ▀█ ██▒▒███   ▓██  █▒░▒███   ▓██ ░▄█ ▒
// ▓██▒  ▐▌██▒▒▓█  ▄  ▒██ █░░▒▓█  ▄ ▒██▀▀█▄
// ▒██░   ▓██░░▒████▒  ▒▀█░  ░▒████▒░██▓ ▒██▒
// ░ ▒░   ▒ ▒ ░░ ▒░ ░  ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
// ░ ░░   ░ ▒░ ░ ░  ░  ░ ░░   ░ ░  ░  ░▒ ░ ▒░
//    ░   ░ ░    ░       ░░     ░     ░░   ░
//          ░    ░  ░     ░     ░  ░   ░
//                       ░
// A function returning 'never' cannot have a reachable end point.ts(2534)
function err(): never {
  throw new Error("Never return, just throw");
  console.log("something never reached");
}

try {
  err();
} catch (error: unknown) {
  console.log(error);
}

//  ██▓███   ██▓    ▓█████ ▄▄▄        ██████ ▓█████
// ▓██░  ██▒▓██▒    ▓█   ▀▒████▄    ▒██    ▒ ▓█   ▀
// ▓██░ ██▓▒▒██░    ▒███  ▒██  ▀█▄  ░ ▓██▄   ▒███
// ▒██▄█▓▒ ▒▒██░    ▒▓█  ▄░██▄▄▄▄██   ▒   ██▒▒▓█  ▄
// ▒██▒ ░  ░░██████▒░▒████▒▓█   ▓██▒▒██████▒▒░▒████▒
// ▒▓▒░ ░  ░░ ▒░▓  ░░░ ▒░ ░▒▒   ▓▒█░▒ ▒▓▒ ▒ ░░░ ▒░ ░
// ░▒ ░     ░ ░ ▒  ░ ░ ░  ░ ▒   ▒▒ ░░ ░▒  ░ ░ ░ ░  ░
// ░░         ░ ░      ░    ░   ▒   ░  ░  ░     ░
//              ░  ░   ░  ░     ░  ░      ░     ░  ░

// ▓█████▄  ▒█████   ███▄    █ ▄▄▄█████▓
// ▒██▀ ██▌▒██▒  ██▒ ██ ▀█   █ ▓  ██▒ ▓▒
// ░██   █▌▒██░  ██▒▓██  ▀█ ██▒▒ ▓██░ ▒░
// ░▓█▄   ▌▒██   ██░▓██▒  ▐▌██▒░ ▓██▓ ░
// ░▒████▓ ░ ████▓▒░▒██░   ▓██░  ▒██▒ ░
//  ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒   ▒ ░░
//  ░ ▒  ▒   ░ ▒ ▒░ ░ ░░   ░ ▒░    ░
//  ░ ░  ░ ░ ░ ░ ▒     ░   ░ ░   ░
//    ░        ░ ░           ░
//  ░
// try not to do that
let totallyRandom: undefined | number;
