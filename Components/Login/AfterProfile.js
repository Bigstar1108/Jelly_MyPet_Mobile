import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, Alert, AsyncStorage } from 'react-native';
import { Icon } from 'native-base';
import axios from 'axios';
import { IconButton } from 'react-native-paper';

export default class AfterLoginTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color : tintColor }}/>
        )
    }

    state = {
        userName : '',
        userPetName : '',
        id : '',
        token : '',
        gender : 0,
        imgUrl : [
            {
                id : 0, //대성
                ImageUrl:'http://www.fashionnetkorea.com/__boardstyle/FASHION/MGREPORT/images/20150518112053_151158171.JPG'
            },
            {
                id : 1, //재민
                ImageUrl : 'http://image.kmib.co.kr/online_image/2017/0430/201704301035_61120011435772_1.jpg'
            },
            {
                id : 2, //주영
                ImageUrl : 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27288646551CAE6219'
            },
            {
                id : 3, //해성
                ImageUrl : 'http://mblogthumb1.phinf.naver.net/MjAxNzEwMjBfNTcg/MDAxNTA4NDc4NDU0ODQ3.jincfwfE-Q1Ro1PXdkMOpJpg9tdqUUSrcAUnCdT3Cugg.ai_jwofhwexStNzj4aStpTAhvbk0I5bWh6mJ_TASKAkg.PNG.fourmentrading/2017-10-20_14%3B46%3B59.PNG?type=w800'
            },
            {
                id : 4, //정호
                ImageUrl : 'data:image/png;base64,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'
            }
        ],
        num : 0
    }

    async _setStoragetoken(){
        var token = await AsyncStorage.getItem("x-access-token");
        this.setState({
            token: token
        })
        this.fetchInfor();
    }

    fetchInfor(){
        console.log("fetch token", this.state.token);
        axios.get('http://192.168.0.5:8080/member', {
            headers: {"x-access-token" : this.state.token}
        })
        .then((response) => {
            console.log("response");
            this.setState({
                userName : response.data.data.userData.userName,
                userPetName : response.data.data.userData.userPetName,
                id : response.data.data.userData.id,
                gender : response.data.data.userData.gender
            })
            if(this.state.userName === "황대성"){
                this.setState({
                    num : 0
                })
            }else{
                if(this.state.userName === "이재민"){
                    this.setState({
                        num : 1
                    })
                }else{
                    if(this.state.userName === "최주영"){
                        this.setState({
                            num : 2
                        })
                    }else{
                        if(this.state.userName === "오해성"){
                            this.setState({
                                num : 3
                            })
                        }else{
                            this.setState({
                                num : 4
                            })
                        }
                    }
                }
            }
        })
        .catch((error) => {
            console.log(error);
            Alert.alert("Profile Error", "프로필정보를 불러오기 실패!");
        })
    }

    componentDidMount(){
        this._setStoragetoken();
    }

    sendData = () => {
        this.props.sendData(0);
    } //로그아웃

    PostsendData = () => {
        this.props.PostsendData(false);
    } //글쓰기 페이지로 이동

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.informationTab}>
                    <Icon name ="face-profile" type="MaterialCommunityIcons" style = {{alignItems:'center'}} />
                    <Text style={{fontWeight : "bold", fontSize : 35, textAlign:'center', marginBottom : 20 }}>Name : {this.state.userName}({this.state.id})</Text>
                    <Text style={{fontSize : 20, textAlign:'center'}}>PetName : {this.state.userPetName}</Text>
                    <Image
                        style={{width:300, height:300, alignItems:'center', borderColor:'black', borderWidth:2}}
                        source={{uri : this.state.imgUrl[this.state.num].ImageUrl}}
                    />
                </View>
                <IconButton
                    icon="pencil"
                    type="Entypo"
                    onPress = {(e) => this.PostsendData(e)}
                    style={{marginTop:20}}
                />
                <Button
                    title="Sign Out"
                    onPress = {(e) => this.sendData(e)}
                />
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
    informationTab:{
        width:400,
        height:500,
        borderColor: 'black',
        borderWidth : 3,
        alignItems:'center',
        justifyContent:'center'
    },
    usericon:{
        alignItems:'center'
    }

})