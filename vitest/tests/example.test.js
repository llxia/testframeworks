import { describe, test, expect } from "vitest";
import { add, isPrime } from "../src/example";

describe("example.add", () => {
  test("return sum", () => {
    const sum = add(1, 4);
    expect(sum).toBe(5);
  });

  test("handle string", () => {
    expect(add("", 4)).toBe("4");
    expect(add("", "")).toBe("");
  });
});

describe("example.isPrime", () => {
  test.each([
    { value: 2, expected: true },
    { value: 3, expected: true },
    { value: 5, expected: true },
  ])("return $expected for small numbers $value ", ({ value, expected }) => {
    expect(isPrime(value)).toBe(expected);
  });

  test("return false for small numbers", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(5)).toBeFalsy;
  });

  test("test array using toEqual", () => {
    const nums = [2, 3, 4, 5];
    const result = nums.map(isPrime);
    expect(result).toEqual([true, true, false, true]);
  });

  test("test array using filter", () => {
    const nums = [2, 3, 4, 5, 7];
    const result = nums.filter(isPrime);
    expect(result).toContain(7);
    expect(result).not.toContain(4);
  });

  test("throws an error", () => {
    const badCall = () => isPrime("invalid");
    expect(badCall).toThrow();
  });

  test("test typeof", () => {
    expect(isPrime(7)).toBeTypeOf("boolean");
    expect(typeof isPrime(7)).toBe("boolean");
  });
});
