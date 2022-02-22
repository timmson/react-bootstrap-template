import React from "react"
import * as renderer from "react-test-renderer"
import App from "../src/app"
import {IHash} from "../src/interfaces"

describe("Greeter should", () => {

	test("return greeting", () => {
		const mockHash: IHash = () => 0
		const component = renderer.create(<App hash={mockHash}/>)
		expect(component.toJSON()).toMatchSnapshot()
		component.unmount()
	})
})