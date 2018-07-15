import React, { Component } from 'react'
import { Text, View } from 'react-native';


export default class Example extends Component {
    static defaultProps = {
        className: '',
    }

    render() {

        const { className } = this.props

        return <View style={{ borderWidth:1, borderColor:'rgba(0,0,0,0.3)', height:80, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color:'#333' }}>Whats up </Text>
        </View>
    }
}