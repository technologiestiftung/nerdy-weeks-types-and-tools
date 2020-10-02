/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Primitive types (number, string, boolean, undefined, null, void, Symbol)

const num: number = 3;
const str: string = "boogie";
const bool: boolean = true;
const undef: undefined = undefined;
const nil: null = null;
// const emptyness = void; // does not work that way

//'Symbol' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
// yes we do. Go to tsconfig.json and change the target
const sym = Symbol("boogie");

// there ae some special types in TS
// unknow, never or any
let couldBeAnything: any;

let foo: unknown;
foo = 1;

const bah = 2;
if (typeof foo === "number") {
  const res = bah + foo;
}

/**
 *
 * A function returning 'never' cannot have a reachable end point.ts(2534)
 */
function err(): never {
  throw new Error("Never return, just throw");
}

// try not to do that
let totallyRandom: undefined | number | boolean | string;
