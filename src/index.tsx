import "./index.scss"
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
import CharCodeHash from "./char-code-hash"

ReactDOM.render(<App hash={CharCodeHash}/>, document.getElementById("app"))