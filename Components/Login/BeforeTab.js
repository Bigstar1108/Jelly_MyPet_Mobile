import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, Alert, AsyncStorage } from 'react-native';
import { Icon } from 'native-base';
import axios from 'axios';

export default class BeforeLoginTab extends Component{
    state = {
        id : '',
        password: '',
        status: 0,
        token: ''
    }

    sendData = () => {
        this.props.callbackFunction(1);
    }

    onClickForgot = () => {
        Alert.alert("Plz Wait", "페이지 제작 중 입니다.")
    }

    onClickSignUP = () => {
        Alert.alert("Plz wait", "페이지 제작 중 입니다.")
    }

    onClickListener = () => {
        axios.post('http://10.80.162.116:6000/auth/login',{
            id : this.state.id,
            pw : this.state.password
        })
        .then((response) => {
            //console.log(response);
            this.setState({
                status: response.data.status,
                token : response.data.data.token
            })
            console.log(this.state.token);
            if(this.state.status === 200){
                Alert.alert("Login", "로그인 성공!!");
                AsyncStorage.setItem("checkLogin", "true");
                console.log(AsyncStorage.getItem("checkLogin"));
                AsyncStorage.setItem("x-access-token", this.state.token);
                this.sendData();
            }else{
                console.log("Another Error!");
            }
        })
        .catch((error) => {
            console.log(error);
            Alert.alert("Login Error", "Id 혹은 Pw가 잘못되었습니다.");
        });
    }

    render(){
        return(
            
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Icon name="account" type="MaterialCommunityIcons"/>
                    <TextInput style={styles.inputs}
                        placeholder="Id"
                        onChangeText={(id) => this.setState({id})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock-open" type="MaterialCommunityIcons"/>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
                    <Text style={styles.loginText}>Sign in</Text>
                </TouchableHighlight> 

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickForgot()}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickSignUP()}>
                    <Text>Sign up</Text>
                </TouchableHighlight>
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
    inputContainer:{
        borderBottomColor: "#53565A",
        backgroundColor:"#FFFFFF",
        borderRadius:30,
        borderBottomWidth:4,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor:"#FFFFFF",
        flex:1
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent:'center'
    },
    buttonContainer:{
        height:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton:{
        backgroundColor:"#53565A"
    },
    loginText:{
        color:"white",
    }
})
