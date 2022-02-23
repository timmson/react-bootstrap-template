import charCodeHash from "../src/char-code-hash"

describe("Calculate function", () => {

	test("gets 'Ivan' and should return 398", () => {
		const result = charCodeHash("Ivan")

		expect(result).toEqual(398)
	})

})