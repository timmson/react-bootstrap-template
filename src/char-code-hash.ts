const CharCodeHash = (name: string) => {
	return Array.from(Array(name.length).keys())
		.map((i) => name.charCodeAt(i))
		.reduce((p, c) => p + c)
}

export default CharCodeHash
