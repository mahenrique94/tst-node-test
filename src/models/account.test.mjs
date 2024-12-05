import assert from "node:assert";
import { describe, it } from "node:test";

import { BusinessException } from "../exceptions/business.exception.mjs";

import { Account } from "./account.mjs";
import { Person } from "./person.mjs";

describe("Tests for Account class", () => {
  it("Should open a new account when creating a new one", () => {
    const ac = new Account(new Person("Matheus"));
    assert.strictEqual(ac.balance, 0.0);
  });

  it("Should deposit an amount of money when calling deposit function", () => {
    const ac = new Account(new Person("Matheus"));

    ac.deposit(150);

    assert.strictEqual(ac.balance, 150.0);
  });

  it("Should withdraw an amount of money when account has balance", () => {
    const ac = new Account(new Person("Matheus"));

    ac.deposit(150);
    ac.withdraw(100);

    assert.strictEqual(ac.balance, 50.0);
  });

  it("Should throw an error when trying to transfer a higher account balance amount", () => {
    const ac = new Account(new Person("Matheus"));

    ac.deposit(150);
    assert.throws(
      () => ac.withdraw(500),
      new BusinessException("The account has no enough balance.")
    );
  });

  it("Should transfer the correct amount when transfering money between accounts", () => {
    const ac1 = new Account(new Person("Matheus"));
    const ac2 = new Account(new Person("Castiglioni"));

    ac1.deposit(500);
    ac1.transfer(200, ac2);

    assert.strictEqual(ac1.balance, 300.0);
    assert.strictEqual(ac2.balance, 200.0);
  });

  it("Should throw an error when transfering a higher account balance amount", () => {
    const ac1 = new Account(new Person("Matheus"));
    const ac2 = new Account(new Person("Castiglioni"));

    ac1.deposit(199);

    assert.throws(
      () => ac1.transfer(200, ac2),
      new BusinessException(
        "It's not possible to perform that transfer because the source account has no enough balance."
      )
    );
  });
});
