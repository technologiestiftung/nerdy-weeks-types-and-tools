/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// types and interfaces
//
//
// types are like a redefinition for easier handling

{
  let possibleNames: "Jabba" | "Leia" | "Luke";
  // possibleNames = "Han";// this does not work
  possibleNames = "Jabba";
}
{
  // Can also be written like this
  type Names = "Jabba" | "Leia" | "Luke";
  let possibleNames: Names;
  possibleNames = "Jabba";
}

{
  interface User {
    firstName: string;
    lastName: string;
    userName?: string; // ? makes it optional
  }

  const you: User = { firstName: "Luke", lastName: "Skywalker" };
  you.userName = "LaserLover42";
  interface SuperUser extends User {
    knowsSudo: boolean;
  }

  const me: SuperUser = { ...you, knowsSudo: true };
}

// Lets get nuts with it interfaces

{
  interface Thing {
    name: string;
  }

  interface Foo {
    log(): void;
  }

  class Thong implements Thing {
    constructor(public name: string = "Bantha Pudo") {}
  }

  class Thung extends Thong implements Foo {
    log(): void {
      console.log(this.name);
    }
  }
  const what = new Thung();

  what.log();
}

// First excersise 10 minutes

// Write an interface for
// an animal as a abstract layout
// and then for two specific animal like
//
// - mammal
// or
// - insect
// or
// - fish
// or
// - ...
// what do they have in common?
// What properties can they share?
//  which are specifc for them?

interface Animal {
  breathsAir: boolean;
  hasLegs: boolean;
  hasFur: boolean;
}

interface Cephalopod extends Animal {
  numberOfTentacels: number;
  numberOfHearts: number;
  tint: () => void;
}

interface Fish extends Animal {
  numberOfGills: number;
  numberOfFins: number;
  glowsInTheDark: boolean;
}

interface Shark extends Fish {
  numberOfTeethRows: number;
  eat(): void;
}

const bruce: Shark = {
  numberOfTeethRows: 5,
  numberOfFins: 4,
  numberOfGills: 2,
  glowsInTheDark: false,
  breathsAir: true,
  hasLegs: false,
  hasFur: false,
  eat: function () {
    console.log("fish are friends not food");
  },
};

const hank: Cephalopod = {
  breathsAir: true,
  hasLegs: false,
  hasFur: false,
  numberOfTentacels: 8,
  numberOfHearts: 4,
  tint: () => {
    console.log("now you see me now you dont");
  },
};

// There are some fancy things you can do with utility types.
// https://www.typescriptlang.org/docs/handbook/utility-types.html

const couldBeAShark: Partial<Shark> = {
  numberOfFins: 4,
};

const couldAlsoBeAShark: Pick<Shark, "eat" | "numberOfTeethRows"> = {
  eat: () => {
    console.log("njam njam");
  },
  numberOfTeethRows: 10,
};

const maybeAShark: Omit<Shark, "hasFur" | "breathsAir" | "numberOfFins"> = {
  numberOfTeethRows: 4,
  eat: () => console.log("njam"),
  numberOfGills: 2,
  glowsInTheDark: false,
  hasLegs: false,
};

const maybeNotAShark: Omit<
  Shark,
  | "hasFur"
  | "numberOfTeethRows"
  | "eat"
  | "numberOfGills"
  | "numberOfFins"
  | "glowsInTheDark"
  | "breathsAir"
  | "hasLegs"
  | "glowsInTheDark"
  | "breathsAir"
  | "hasLeg"
> = {};
