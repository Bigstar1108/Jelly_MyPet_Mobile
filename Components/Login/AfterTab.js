import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import { Icon } from 'native-base';
import axios from 'axios';
import AfterProfile from './AfterProfile';
import AfterPost from '../Post/AfterPost';

export default class AfterLoginTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color : tintColor }}/>
        )
    }

    state = {
        show : true,
        tokken : ''
    }

    sendData = () => {
        this.props.callbackFunction(0);
    }

    PostsendData = (showData) => {
        this.setState({show: showData})
    }

    render(){
        return(
            <View style={styles.container}>
                {
                        this.state.show === true ? <AfterProfile sendData = {this.sendData} PostsendData = {this.PostsendData} /> : <AfterPost PostsendData = {this.PostsendData}/>
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
    }
})