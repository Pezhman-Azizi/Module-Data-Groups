const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

test("contains on empty object returns false", () => {
  const result = contains({}, "a");
  expect(result).toBe(false);
});

test("contains with an existing property name returns true", () => {
  const result = contains({ a: 1, b: 2 }, "a");
  expect(result).toBe(true);
});

test("contains with a non-existent property name returns false", () => {
  const result = contains({ a: 1, b: 2 }, "c");
  expect(result).toBe(false);
});

test("contains with invalid parameters (like an array) returns false", () => {
  const result = contains([], "a");
  expect(result).toBe(false);
});

test("contains with null or undefined object returns false", () => {
  expect(contains(null, "a")).toBe(false);
  expect(contains(undefined, "a")).toBe(false);
});

test("contains with invalid property names returns false", () => {
  const result = contains({ a: 1, b: 2 }, undefined);
  expect(result).toBe(false);
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
