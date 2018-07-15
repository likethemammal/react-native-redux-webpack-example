import React, { Component } from 'react'
import { Provider } from "react-redux"
import appStore from "../store"
import App from './App'

class Root extends Component {
	render() {
		return <Provider store={appStore}>
			<App />
		</Provider>
	}
}

export default Root;
