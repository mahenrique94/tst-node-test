import { Account } from "./models/account.mjs";
import { Person } from "./models/person.mjs";
import { Repository } from "./repository.mjs";

export class Controller {
  constructor() {
    this.repository = new Repository();
  }

  create(name) {
    const account = new Account(new Person(name));

    this.repository.insert(account);

    return account;
  }

  getAll() {
    return this.repository.getAll();
  }
}
