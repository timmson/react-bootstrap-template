import React from "react"
import * as renderer from "react-test-renderer"
import {act} from "react-test-renderer"
import App from "../src/app"

jest.mock("../src/char-code-hash", () => () => 42)

describe("App should", () => {

	let component

	beforeEach(() => {
		component = renderer.create(<App/>)
	})

	test("print name", () => {
		act(() =>
			component.root.findByType("input").props.onChange({target: {value: "Test"}})
		)
		const actual = component.root.findByProps({className: "my-style mt-2"}).props.children

		expect(actual).toEqual("Hello, Test! Your number is 42.")
	})

	test("return app", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterEach(() => component.unmount())
})