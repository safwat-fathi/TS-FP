import {
  capitalize,
  trim,
  trimAndCapitalize,
} from "./functional-programming-techniques";
import { accessA, accessB } from "./sandbox";

// const army = makeArmy();

// army[0]();
// army[5]();

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1.value());
// console.log(counter2.value());
// counter1.increment();
// counter1.increment();
// console.log(counter1.value());
// console.log(counter2.value());

// console.log(trimAndCapitalize("   hello world   ")); // "HELLO WORLD"

// const res1 = add(1);
// const res2 = res1(3);
// console.log("🚀 ~ res2:", res2);

// const sum1 = sum(1) as (n: number) => number;
// const sum2 = sum1(2);
// console.log("🚀 ~ sum1:", sum2);

console.log(accessA("a"));
console.log(accessB("b"));

const count = (n: number) => n;

const funcs = [trim, capitalize, trimAndCapitalize, count];

const t = (arg: any) => funcs.reduce((prev: any, curr: any) => curr(prev), arg);

console.log(t);
