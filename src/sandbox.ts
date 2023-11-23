type A = 2 | 4 | 5;
type B = 3 | 10 | 20;

type C = `${A} & ${B}`;

const num: C = "4 & 10";

type Point2dLabeled = [x: number, y: number];
type Point3dLabeled = [x: number, y: number, z: number];

const labeledTuple: Point2dLabeled = [2, 3];

labeledTuple[0];

// * Template Literal Types
type Suit = "Spade" | "Heart" | "Diamond" | "Club";
type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King"
  | "Ace";

type Deck = `${Rank} of ${Suit}`;

const deck: Deck = "2 of Spade";

interface Id<T extends string | number> {
  id: T;
}
class Product implements Id<string> {
  private _id: string;

  constructor(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public set id(newValue: string) {
    this._id = newValue;
  }
}

const prod = new Product("ieie3");
prod.id = "test";

console.log(prod.id);

// * Custom ENUMS
export const weights = {
  heavy: 900,
  light: 200,
} as const;

export type Weights = typeof weights;

export type WeightKey = keyof Weights;

export type WeightValue = Weights[WeightKey];

// * Proxy
// * --------

const messages = {
  message1: "hello",
  message2: "everyone",
};

const handler: ProxyHandler<any> = {
  // these called traps
  get(target: typeof messages, prop: keyof typeof messages) {
    if (prop === "message1") {
      return target[prop] + " world";
    }

    return target[prop];
  },
};

export const proxy: typeof messages = new Proxy(messages, handler);

// * function overload
// * -----------------
// with regular function syntax
export function test(name: string): string; // overloaded signature
export function test(age: number): string; // overloaded signature
export function test(single: boolean): string; // overloaded signature
export function test(value: string | number | boolean): string {
  // implementation signature
  switch (typeof value) {
    case "string":
      return "My name is ${value}.";
    case "number":
      return `I'm ${value} years old.`;
    case "boolean":
      return value ? "I'm single." : "I'm not single.";
    default:
      throw new Error("Invalid Operation!");
  }
}

// with arrow function syntax
type IOverload = {
  (param: number): number[];
  (param: string): object[];
};

// ! here we lost typing params
// ! type checking of return types inside function body is not possible
const overloadedArrowFunc: IOverload = (param: any) => {
  return [param, param];
};

let val = overloadedArrowFunc(4);
let val2 = overloadedArrowFunc("0");

// typing generic function
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  return obj[key];
};

const result = getValue(
  {
    a: 1,
    b: "some value",
    c: false,
  },
  "b"
);

// * Dynamic objects error
// const obj = { a: 1, b: 2 };

// ! this gives error "Element has implicit an any type because of type 'string' can't be used to index type {a: number, b: number}
// const access = (str: string) => {
//   return obj[str];
// };

// solution #1
export const accessA = (str: keyof typeof obj) => {
  return obj[str];
};

export const accessB = (str: keyof typeof obj) => {
  return obj[str];
};

// solution #2
const obj: Record<string, number> = { a: 1, b: 2 };

// as const
const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RouteKeys = keyof typeof routes;

type Route = (typeof routes)[RouteKeys];

const goToRoute = (route: Route) => {};
