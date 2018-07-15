import React, { Component } from 'react'

import ArcadeButton from '../lib/index'
import { AppRegistry } from 'react-native-web'


class App extends Component {
    render() {
        return <ArcadeButton
        >
            <div>test</div>
        </ArcadeButton>
    }
}

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root')
})