// * side-effects
// * --------------
export interface User {
  ageInMonths: number;
  name: string;
}

export const findUserAge = (users: User[], name: string): Promise<number> => {
  if (users.length === 0) {
    return Promise.reject(new Error("There are no users"));
  }

  const user = users.find(u => u.name === name);

  if (!user) {
    return Promise.reject(new Error("No user found"));
  }

  return Promise.resolve(user.ageInMonths);
};

// * laziness
// * --------------

// a function that will not run on its invoke but when its properties in the result is accessed
export const lazyFind = <T>(arr: T[], filter: (i: T) => boolean): T => {
  let user: T | null = null;

  const proxy = new Proxy(
    {},
    {
      get: (_, prop) => {
        console.log("Filtering...");
        if (!user) {
          user = arr.find(filter) || null;
        }
        return user ? (user as any)[prop] : null;
      },
    }
  );

  return proxy as any;
};
