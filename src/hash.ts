import {IHash} from "./interfaces"

const hash: IHash = (name: string) => {
	return Array.from(Array(name.length).keys())
		.map((i) => name.charCodeAt(i))
		.reduce((p, c) => p + c)
}

export default hash
