export class Repository {
  constructor() {
    this.accounts = [];
  }

  insert(account) {
    this.accounts.push(account);
  }

  getAll() {
    return this.accounts;
  }
}
