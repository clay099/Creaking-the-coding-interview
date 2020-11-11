const isUnique = require("./isUnique");

describe("isUnique", () => {
	test("should return true for unique string", () => {
		expect(isUnique("true")).toBe(true);
	});
	test("should return false for a string with duplicate chars", () => {
		expect(isUnique("test")).toBe(false);
	});
});
