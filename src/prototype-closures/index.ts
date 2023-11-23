// * Prototypal inheritance
// * --------------
interface IPerson {
  name: string;
  surname: string;
}

interface ISuperPerson extends IPerson {
  superpower: string;
}

class Person implements IPerson {
  public name: string;
  public surname: string;

  public constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public greet(city: string, country: string) {
    // we use the this operator to access name and surname
    let msg = `Hi, my name is ${this.name} ${this.surname}.`;
    msg += `I'm from ${city} (${country}).`;
    console.log(msg);
  }
}

class SuperHero extends Person implements ISuperPerson {
  public superpower: string;

  public constructor(name: string, surname: string, superpower: string) {
    super(name, surname);
    this.superpower = superpower;
  }

  public userSuperPower() {
    return `I'm using my ${this.superpower}`;
  }
}

export const person = new Person("safwat", "fathi");
