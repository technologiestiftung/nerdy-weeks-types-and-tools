// functions functions functions
// as we already learned we can type functions using
// interfaces and types

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
const func: (opts: FunOptions) => void = ({ value, type }) => {
  console.log(value, type);
};
func({ value: 3, type: "socks" });

// or with a type

type FuncType = (opts: FunOptions) => void;
const funct: FuncType = ({ value, type }) => {
  console.log(value, type);
};
funct({ value: 2, type: "burger" });

// there is also a another special type called a generic
// that will pop up from time to time

// e.g. a typed merge function

// eslint-disable-next-line @typescript-eslint/ban-types
function mergeUntyped(a: object, b: object): object {
  return Object.assign(a, b);
}
const merged1 = mergeUntyped({ name: "Han" }, { shotFirst: true });
console.log(merged1.shotFirst); // Property 'shotFirst' does not exist on type 'object'.ts(2339)

function mergeTyped<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}
const merged2 = mergeTyped({ name: "Han" }, { shotFirst: true });
console.log(merged2.shotFirst); // no error

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

function getByKeyUntyped(
  // eslint-disable-next-line @typescript-eslint/ban-types
  obj: object,
  key: string
) {
  return obj[key]; // gives an error since it might not exsist
}

function getByKey<T extends Record<string, unknown>, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(getByKey({ name: "Chewie" }, "name"));
