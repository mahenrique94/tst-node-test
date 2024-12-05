export class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `I'm ${this.name}`;
  }
}
