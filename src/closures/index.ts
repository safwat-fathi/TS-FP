type TArrayOfFunc = (() => void)[];
// type TArrayOfFunc = Array<() => void>

export const makeArmy = (): TArrayOfFunc => {
  const shooters: TArrayOfFunc = [];

  for (let i = 0; i < 10; i++) {
    // a shooter is a function
    const shooter = () => {
      console.log(i); // which should display it's number
    };

    shooters.push(shooter);
  }

  return shooters;
};

interface Counter {
  increment: () => void;
  decrement: () => void;
  value: () => number;
}

export function makeCounter() {
  // closure context
  let _COUNTER = 0;

  function changeBy(val: number) {
    _COUNTER += val;
  }

  class Counter implements Counter {
    public increment() {
      changeBy(1);
    }

    public decrement() {
      changeBy(-1);
    }

    public value() {
      return _COUNTER;
    }
  }

  return new Counter();
}
