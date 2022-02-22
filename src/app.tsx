import React, {useState} from "react"
import {IHash} from "./interfaces"

type GreeterProps = {
    hash: IHash
}

const App = (props: GreeterProps) => {

	const [state, setState] = useState({name: ""})
	const update = (name) => setState({name: name})

	const greeting = state.name.length > 0 ?
		`Hello, ${state.name}! Your number is ${props.hash(state.name)}.` :
		"Please, start type your name"

	return (
		<div id="app" className="container-sm">
			<h2 className="text-center">Your fist React+Bootstrap app</h2>
			<div className="row mt-4">
				<div className="col-4 text-end align-content-center">
					<label htmlFor="username">Your name:</label>
				</div>
				<div className="col-8 align-content-center">
					<input className="form-control" placeholder="Enter your name ..." type="text" id="username"
						onKeyUp={(event) => update((event.target as HTMLInputElement).value)}/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-4">
                    &nbsp;
				</div>
				<div className="col">
					<p className="my-style mt-2">{greeting}</p>
				</div>
			</div>
		</div>
	)
}

export default App
