import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import { Icon } from 'native-base';
import axios from 'axios';
import BeforeTab from '../Login/BeforeTab';
import AfterPostTab from '../Post/AfterPost';

export default class LoginTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color : tintColor }}/>
        )
    }

    state={
        Post_show : false,
        tokken : ''
    }

    Get_tokken = (tokkenData) => {
        this.setState({tokken: tokkenData})
    }

    Post_callbackFunction = (showData) => {
        this.setState({Post_show: showData})
    }

    render(){
        return( 
            <View style={styles.container}>
                {
                    this.state.Post_show === true ? <BeforeTab Get_tokken = {this.Get_tokken} /> : <AfterPostTab Post_callbackFunction = {this.Post_callbackFunction} />
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

