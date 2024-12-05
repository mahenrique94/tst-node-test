import assert from "node:assert";
import { describe, it, mock } from "node:test";

import { Account } from "./models/account.mjs";
import { Person } from "./models/person.mjs";

class MockedRepository {
  insert(account) {
    mock.fn(account);
  }
}

describe("Testing controller", () => {
  it("Should create a new account when the name is valid", async (ctx) => {
    const mockedInsert = ctx.mock.fn();
    MockedRepository.prototype.insert = mockedInsert;

    ctx.mock.module("./repository.mjs", {
      namedExports: {
        Repository: MockedRepository,
      },
    });

    const { Controller } = await import("./controller.mjs");

    const controller = new Controller();

    const response = controller.create("Matheus");

    assert.strictEqual(response.person.name, "Matheus");
    assert.strictEqual(mockedInsert.mock.callCount(), 1);
    assert.deepStrictEqual(mockedInsert.mock.calls[0].arguments, [
      new Account(new Person("Matheus")),
    ]);
  });
});
