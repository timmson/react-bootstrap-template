import React, {useState} from "react"
import hash from "./char-code-hash"

const App = () => {

	const [state, setState] = useState({name: ""})
	const handleKeyUp = (e) => setState({name: e.target.value})

	const greeting = state.name.length > 0 ?
		`Hello, ${state.name}! Your number is ${hash(state.name)}.` :
		"Please, start typing your name"

	return (
		<div id="app" className="container-sm">
			<h2 className="text-center">Your fist React+Bootstrap app</h2>
			<div className="row mt-4">
				<div className="col-4 text-end align-content-center">
					<label htmlFor="username">Your name:</label>
				</div>
				<div className="col-8 align-content-center">
					<input className="form-control"
						   type="text" id="username"
						   placeholder="Enter your name ..."
						   onChange={handleKeyUp}
						   value={state.name}
					/>
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
