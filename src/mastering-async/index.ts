// * Promises
// * --------------
export const promiseRace = Promise.race([
  new Promise<number>(resolve => {
    setTimeout(() => resolve(1), 3000);
  }),
  new Promise<number>(resolve => {
    setTimeout(() => resolve(2), 2000);
  }),
  new Promise<number>(resolve => {
    setTimeout(() => resolve(3), 1000);
  }),
]).then(fastest => {
  console.log(fastest); // 3
});

const timeout = (cb: () => void) => setTimeout(cb, 100);

export const promiseOne: () => Promise<number> = () =>
  new Promise((res, rej) => {
    try {
      timeout(() => res(1));
    } catch (error) {
      rej(error);
    }
  });
export const promiseTwo: () => Promise<number> = () =>
  new Promise((res, rej) => {
    try {
      timeout(() => res(2));
    } catch (error) {
      rej(error);
    }
  });
export const promiseThree: () => Promise<number> = () =>
  new Promise((res, rej) => {
    try {
      timeout(() => res(3));
    } catch (error) {
      rej(error);
    }
  });

// * Generators
// * --------------
export function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}
