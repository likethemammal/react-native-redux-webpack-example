import React, { Component } from 'react'

import Example from './Example'

import general from '@likethemammal/general-components'

const { SVG } = general.components

import APPS_SVG from 'svg-icon/dist/svg/material/apps.svg'

import { Text, View } from 'react-native';

class App extends Component {

    onButtonClick = () => {
        const { changeAction, on } = this.props

        changeAction(!on)
    }

    render() {
        const { on } = this.props

        return <div>
            <div onClick={this.onButtonClick}>Click Me!</div>

            <View style={{ flex:1, backgroundColor:'lightblue', padding:0 }}>
                <View style={{ borderWidth:1, borderColor:'rgba(0,0,0,0.3)', height:80, flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                    <Text style={{ color: '#333' }}>Hello</Text>
                </View>
            </View>

            <SVG style={{display: 'none'}} raw={APPS_SVG} />
            {on && <Example/>}
        </div>
    }
}

export default App