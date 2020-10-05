/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// types and interfaces
//
// ▄▄▄█████▓▓██   ██▓ ██▓███  ▓█████
// ▓  ██▒ ▓▒ ▒██  ██▒▓██░  ██▒▓█   ▀
// ▒ ▓██░ ▒░  ▒██ ██░▓██░ ██▓▒▒███
// ░ ▓██▓ ░   ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄
//   ▒██▒ ░   ░ ██▒▓░▒██▒ ░  ░░▒████▒
//   ▒ ░░      ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░
//     ░     ▓██ ░▒░ ░▒ ░      ░ ░  ░
//   ░       ▒ ▒ ░░  ░░          ░
//           ░ ░                 ░  ░
//           ░ ░
// types are like a redefinition for easier handling
/*
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
*/

//  ██▓ ███▄    █ ▄▄▄█████▓▓█████  ██▀███    █████▒▄▄▄       ▄████▄  ▓█████
// ▓██▒ ██ ▀█   █ ▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒▓██   ▒▒████▄    ▒██▀ ▀█  ▓█   ▀
// ▒██▒▓██  ▀█ ██▒▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒▒████ ░▒██  ▀█▄  ▒▓█    ▄ ▒███
// ░██░▓██▒  ▐▌██▒░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄  ░▓█▒  ░░██▄▄▄▄██ ▒▓▓▄ ▄██▒▒▓█  ▄
// ░██░▒██░   ▓██░  ▒██▒ ░ ░▒████▒░██▓ ▒██▒░▒█░    ▓█   ▓██▒▒ ▓███▀ ░░▒████▒
// ░▓  ░ ▒░   ▒ ▒   ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░ ▒ ░    ▒▒   ▓▒█░░ ░▒ ▒  ░░░ ▒░ ░
//  ▒ ░░ ░░   ░ ▒░    ░     ░ ░  ░  ░▒ ░ ▒░ ░       ▒   ▒▒ ░  ░  ▒    ░ ░  ░
//  ▒ ░   ░   ░ ░   ░         ░     ░░   ░  ░ ░     ░   ▒   ░           ░
//  ░           ░             ░  ░   ░                  ░  ░░ ░         ░  ░
//                                                          ░
// you can understand interfaces as a blueprint for an object
/*
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
*/

// Lets get nuts with it interfaces
// its a little stupid but…
/*
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
*/

// 📝 First excersise 10-15 minutes

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
