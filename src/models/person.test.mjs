import assert from "node:assert";
import { describe, it } from "node:test";

import { Person } from "./person.mjs";

describe("Testig Person class", () => {
  it("Should say the name correctly when calling the greeting function", () => {
    const p1 = new Person("Matheus");

    assert.strictEqual(p1.greeting(), `I'm Matheus`);
  });
});
