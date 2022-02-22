import hash from "../src/hash"

describe("Calculate function", () => {

	test("gets 'Ivan' and should return 398", () => {
		const result = hash("Ivan")

		expect(result).toEqual(398)
	})

})