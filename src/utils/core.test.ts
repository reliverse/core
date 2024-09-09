import { describe, it, expect } from "vitest";
import { add } from "./core";

describe("Math Operations", () => {
  it("adds two numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
});
