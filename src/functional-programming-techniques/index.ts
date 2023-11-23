// * Composition
// * -------------------
export const trim = (s: string) => s.trim();
export const capitalize = (s: string) => s.toUpperCase();

export const trimAndCapitalize = (s: string) => capitalize(trim(s));

const composeTwo =
  <T>(f: (x: T) => T, g: (x: T) => T) =>
  (x: T) =>
    f(g(x));

const composeTrimAndCapitalize = composeTwo(trim, capitalize);
composeTrimAndCapitalize("   safwat  ");
const compose =
  <T1, T2, T3>(f: (x: T2) => T3, g: (x: T1) => T2) =>
  (x: T1) =>
    f(g(x));

const count = (n: number) => n;

const composeMany =
  <T>(...functions: ((arg: T) => T)[]) =>
  (arg: any) =>
    functions.reduce((prev, curr) => curr(prev), arg);

const trimAndCapitalizeComposed = compose(trim, capitalize);
const trimAndCapitalizeComposedMany = composeMany(
  trim,
  capitalize,
  composeTrimAndCapitalize
);

// * partial application
// * -------------------
export const add = (a: number) => (b: number) => {
  return a + b;
};

export const sum = (a: number, b?: number) => {
  if (b) {
    return a + b;
  }

  return (b: number) => {
    return a + b;
  };
};

const nonPartialReplace = (s: string, f: string, r: string) =>
  s.split(f).join(r);
export const partialReplace = (f: string, r: string) => (s: string) =>
  s.split(f).join(r);
