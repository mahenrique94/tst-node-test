import { BusinessException } from "../exceptions/business.exception.mjs";

export class Account {
  constructor(person) {
    this.person = person;
    this.balance = 0.0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  transfer(amount, target) {
    try {
      this.withdraw(amount);
      target.deposit(amount);
    } catch (err) {
      throw new BusinessException(
        "It's not possible to perform that transfer because the source account has no enough balance."
      );
    }
  }

  withdraw(amount) {
    const hasBalance = this.balance - amount >= 0;

    if (!hasBalance) {
      throw new BusinessException("The account has no enough balance.");
      return
    }

    this.balance -= amount;
  }
}
