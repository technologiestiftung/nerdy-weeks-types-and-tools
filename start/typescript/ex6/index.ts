//   █████▒█    ██  ███▄    █
// ▓██   ▒ ██  ▓██▒ ██ ▀█   █
// ▒████ ░▓██  ▒██░▓██  ▀█ ██▒
// ░▓█▒  ░▓▓█  ░██░▓██▒  ▐▌██▒
// ░▒█░   ▒▒█████▓ ▒██░   ▓██░
//  ▒ ░   ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒
//  ░     ░░▒░ ░ ░ ░ ░░   ░ ▒░
//  ░ ░    ░░░ ░ ░    ░   ░ ░
//           ░              ░

//  █     █░ ██▓▄▄▄█████▓ ██░ ██
// ▓█░ █ ░█░▓██▒▓  ██▒ ▓▒▓██░ ██▒
// ▒█░ █ ░█ ▒██▒▒ ▓██░ ▒░▒██▀▀██░
// ░█░ █ ░█ ░██░░ ▓██▓ ░ ░▓█ ░██
// ░░██▒██▓ ░██░  ▒██▒ ░ ░▓█▒░██▓
// ░ ▓░▒ ▒  ░▓    ▒ ░░    ▒ ░░▒░▒
//   ▒ ░ ░   ▒ ░    ░     ▒ ░▒░ ░
//   ░   ░   ▒ ░  ░       ░  ░░ ░
//     ░     ░            ░  ░  ░

// functions functions functions
// functions functions functions
// functions functions functions
// functions functions functions
// functions functions functions
//
//
//
// as we already learned we can type functions using
// interfaces and types
/*
type Things = "burger" | "socks" | "beer";

interface FunOptions {
  value: number;
  type: Things;
}

function fun(opts: FunOptions): void {
  console.log(opts.value, opts.type);
}

fun({ value: 5, type: "beer" });

// we can declare the function in a different way
const moreFun: (opts: FunOptions) => void = ({ value, type }) => {
  console.log(value, type);
};
moreFun({ value: 3, type: "socks" });

// or with a type

type FunType = (opts: FunOptions) => void;
const lotMoreFun: FunType = ({ value, type }) => {
  console.log(value, type);
};
lotMoreFun({ value: 2, type: "burger" });
*/

/*
of course functions can return types, interfaces, primitives, classes. You name it
function evenMoreFun(...args: number[]): number[] {
  return args.map((x) => x * 2);
}
evenMoreFun(1, 2, 3, 4);
*/
//
//
//
//
//
//
//
/*
// Arguments can be optional
function optionalFun(a?: string): string[] {
  const res: string[] = [];
  if (a) {
    res.push(...a.split(""));
  }
  return res;
}
console.log(optionalFun());
console.log(optionalFun("Hubba hubba"));
*/
//   ▄████ ▓█████  ███▄    █ ▓█████  ██▀███   ██▓ ▄████▄    ██████
//  ██▒ ▀█▒▓█   ▀  ██ ▀█   █ ▓█   ▀ ▓██ ▒ ██▒▓██▒▒██▀ ▀█  ▒██    ▒
// ▒██░▄▄▄░▒███   ▓██  ▀█ ██▒▒███   ▓██ ░▄█ ▒▒██▒▒▓█    ▄ ░ ▓██▄
// ░▓█  ██▓▒▓█  ▄ ▓██▒  ▐▌██▒▒▓█  ▄ ▒██▀▀█▄  ░██░▒▓▓▄ ▄██▒  ▒   ██▒
// ░▒▓███▀▒░▒████▒▒██░   ▓██░░▒████▒░██▓ ▒██▒░██░▒ ▓███▀ ░▒██████▒▒
//  ░▒   ▒ ░░ ▒░ ░░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░░▓  ░ ░▒ ▒  ░▒ ▒▓▒ ▒ ░
//   ░   ░  ░ ░  ░░ ░░   ░ ▒░ ░ ░  ░  ░▒ ░ ▒░ ▒ ░  ░  ▒   ░ ░▒  ░ ░
// ░ ░   ░    ░      ░   ░ ░    ░     ░░   ░  ▒ ░░        ░  ░  ░
//       ░    ░  ░         ░    ░  ░   ░      ░  ░ ░            ░
//                                               ░
// there is also a another special type called a generic
// that will pop up from time to time (e.g in React.useState<GENERIC>())
// so lets take a look
// e.g. by writing a typed merge function
//  █    ██  ███▄    █ ▄▄▄█████▓▓██   ██▓ ██▓███  ▓█████ ▓█████▄
//  ██  ▓██▒ ██ ▀█   █ ▓  ██▒ ▓▒ ▒██  ██▒▓██░  ██▒▓█   ▀ ▒██▀ ██▌
// ▓██  ▒██░▓██  ▀█ ██▒▒ ▓██░ ▒░  ▒██ ██░▓██░ ██▓▒▒███   ░██   █▌
// ▓▓█  ░██░▓██▒  ▐▌██▒░ ▓██▓ ░   ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ░▓█▄   ▌
// ▒▒█████▓ ▒██░   ▓██░  ▒██▒ ░   ░ ██▒▓░▒██▒ ░  ░░▒████▒░▒████▓
// ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒   ▒ ░░      ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░ ▒▒▓  ▒
// ░░▒░ ░ ░ ░ ░░   ░ ▒░    ░     ▓██ ░▒░ ░▒ ░      ░ ░  ░ ░ ▒  ▒
//  ░░░ ░ ░    ░   ░ ░   ░       ▒ ▒ ░░  ░░          ░    ░ ░  ░
//    ░              ░           ░ ░                 ░  ░   ░
//                               ░ ░                      ░

/*
function mergeUntyped(a: object, b: object): object {
  return Object.assign(a, b);
}
const merged1 = mergeUntyped({ name: "Han" }, { shotFirst: true });
console.log(merged1.shotFirst); // Property 'shotFirst' does not exist on type 'object'.ts(2339)
*/

// ▄▄▄█████▓▓██   ██▓ ██▓███  ▓█████ ▓█████▄
// ▓  ██▒ ▓▒ ▒██  ██▒▓██░  ██▒▓█   ▀ ▒██▀ ██▌
// ▒ ▓██░ ▒░  ▒██ ██░▓██░ ██▓▒▒███   ░██   █▌
// ░ ▓██▓ ░   ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ░▓█▄   ▌
//   ▒██▒ ░   ░ ██▒▓░▒██▒ ░  ░░▒████▒░▒████▓
//   ▒ ░░      ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░ ▒▒▓  ▒
//     ░     ▓██ ░▒░ ░▒ ░      ░ ░  ░ ░ ▒  ▒
//   ░       ▒ ▒ ░░  ░░          ░    ░ ░  ░
//           ░ ░                 ░  ░   ░
//           ░ ░                      ░
/*
function mergeTyped<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}
const merged2 = mergeTyped({ name: "Han" }, { shotFirst: true });
console.log(merged2.shotFirst); // no error

*/

/*
function countAndPrint<T extends { length: number }>(item: T): [T, string] {
  let description = "Has no value";
  if (item.length === 1) {
    description = "Has one element";
  } else {
    description = `Has ${item.length} elements`;
  }
  return [item, description];
}

console.log(countAndPrint("Hi there"));
console.log(countAndPrint(["Hi there"]));
console.log(countAndPrint({ length: 100 }));
console.log(countAndPrint(123));
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//  █    ██  ███▄    █ ▄▄▄█████▓▓██   ██▓ ██▓███  ▓█████ ▓█████▄
//  ██  ▓██▒ ██ ▀█   █ ▓  ██▒ ▓▒ ▒██  ██▒▓██░  ██▒▓█   ▀ ▒██▀ ██▌
// ▓██  ▒██░▓██  ▀█ ██▒▒ ▓██░ ▒░  ▒██ ██░▓██░ ██▓▒▒███   ░██   █▌
// ▓▓█  ░██░▓██▒  ▐▌██▒░ ▓██▓ ░   ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ░▓█▄   ▌
// ▒▒█████▓ ▒██░   ▓██░  ▒██▒ ░   ░ ██▒▓░▒██▒ ░  ░░▒████▒░▒████▓
// ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒   ▒ ░░      ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░ ▒▒▓  ▒
// ░░▒░ ░ ░ ░ ░░   ░ ▒░    ░     ▓██ ░▒░ ░▒ ░      ░ ░  ░ ░ ▒  ▒
//  ░░░ ░ ░    ░   ░ ░   ░       ▒ ▒ ░░  ░░          ░    ░ ░  ░
//    ░              ░           ░ ░                 ░  ░   ░
//
/*░ ░                      ░
function getByKeyUntyped(
  // eslint-disable-next-line @typescript-eslint/ban-types
  obj: object,
  key: string
) {
  return obj[key]; // gives an error since it might not exsist
}
*/

// ▄▄▄█████▓▓██   ██▓ ██▓███  ▓█████ ▓█████▄
// ▓  ██▒ ▓▒ ▒██  ██▒▓██░  ██▒▓█   ▀ ▒██▀ ██▌
// ▒ ▓██░ ▒░  ▒██ ██░▓██░ ██▓▒▒███   ░██   █▌
// ░ ▓██▓ ░   ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ░▓█▄   ▌
//   ▒██▒ ░   ░ ██▒▓░▒██▒ ░  ░░▒████▒░▒████▓
//   ▒ ░░      ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░ ▒▒▓  ▒
//     ░     ▓██ ░▒░ ░▒ ░      ░ ░  ░ ░ ▒  ▒
//   ░       ▒ ▒ ░░  ░░          ░    ░ ░  ░
//           ░ ░                 ░  ░   ░
//           ░ ░                      ░
/*
function getByKey<T extends Record<string, unknown>, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(getByKey({ name: "Chewie" }, "name"));
*/

// excersise 2 - 10 - 15 minutes
// write a function that takes an "any" object and makes on of your animals from ex5 out of it.
// A real world application could be a response from an API that was parsed with JSON.parse()
// Don't use type casting
// https://www.typescripttutorial.net/typescript-tutorial/type-casting/
//
/*
function makeItYours(input: any) {
  // mow check if it has your props and make it yours
  // maybe throw Errors if it has not what you need
  // you can always use if(input && typeof input.thing === "string"){//do something}
  return {};
}

const yourThing = makeItYours(JSON.parse('{"key":"value", "prop":1, "thing":true}'))
console.log(yourThing)

*/
