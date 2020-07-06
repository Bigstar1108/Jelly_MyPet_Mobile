import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import { Icon } from 'native-base';
import axios from 'axios';
import BeforeTab from '../Login/BeforeTab';
import AfterPostTab from '../Post/AfterPost';
import AfterTab from '../Login/AfterTab';

export default class LoginTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-contact" style={{ color : tintColor }}/>
        )
    }

    state={
        show : 0,
        tokken : ''
    }

    callbackFunction = (showData) => {
        this.setState({show: showData})
    }

    Get_tokken = (tokkenData) => {
        this.setState({tokken : tokkenData})
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.show === 0 ? <BeforeTab callbackFunction = {this.callbackFunction}  Get_tokken = {this.Get_tokken}/> : <AfterTab callbackFunction = {this.callbackFunction} tokkenData = {this.state.tokken}/>
                }
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})

