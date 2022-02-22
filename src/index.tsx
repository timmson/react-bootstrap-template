import "./index.scss"
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
import hash from "./hash"

ReactDOM.render(<App hash={hash}/>, document.getElementById("app"))