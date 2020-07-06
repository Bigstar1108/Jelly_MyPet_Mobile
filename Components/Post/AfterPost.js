import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, Alert, AsyncStorage } from 'react-native';
import { Icon } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';
import axios from 'axios';


export default class HomeTab extends Component {
    state = {
        title : '',
        description : '',
        status : 0,
        token : ''
    }

    /*async _getStoragetoken(){
        var token = await AsyncStorage.getItem("x-access-token");
        console.log("gettoken - ", token);
        return token;
    }

    componentDidMount(){
        let token = this._getStoragetoken();
        console.log("didmounttoken", token);
    }*/

    async _setStoragetoken(){
        var token = await AsyncStorage.getItem("x-access-token");
        console.log("token", token);
        this.setState({
            token : token
        })
        console.log("state", this.state.token);
    }

    putImage = () => {
        Alert.alert("Sry", "기능 추가 중입니다. 불편을 드려 죄송합니다.")
    }

    PostsendData = () => {
        this.props.PostsendData(true)
    }

    clearText(){
        this.setState({title : ''})
        this.setState({description: ''})
    }

    componentDidMount(){
        this._setStoragetoken();
    }

    onClickListener = () => {
        
        let Formdata  = new FormData();
        Formdata.append('title', this.state.title);
        Formdata.append('description', this.state.description);

        axios.post('http://10.80.162.116:8080/notice', Formdata, {
            headers: {"x-access-token" : this.state.token}
        })
        .then((response) => {
            console.log(response);
            this.setState({
                status: response.status
            })
            if(this.state.status === 200){
                Alert.alert("Notice", "게시물 올리기 성공!!");
                this.clearText();
            }else{
                console.log("Another Error!!");
            }
        })
        .catch((error) => {
            console.log(error);
            if(this.state.title === '' || this.state.description === ''){
                Alert.alert("Notice Error!!", "제목 혹은 내용을 입력하세요.");
            }
            else{
                Alert.alert("Notice Error!!", "서버 오류.");
            }
        })
        console.log(this.state.title);
        console.log(this.state.description);
    }
    render() {
        return (
            <View style={style.container}>
                <View style={style.titleBox}>
                    <Icon name = "format-text" type="MaterialCommunityIcons" />
                    <TextInput style={style.title_inputs}
                        placeholder = "Title"
                        onChangeText={(title) => this.setState({
                            title
                        })}
                        value={this.state.title}
                    />
                </View>

                <View style={style.descriptionBox}>
                    <Icon name='subtitles-outline' type='MaterialCommunityIcons' style={{marginLeft:10}}/>
                    <TextInput style={style.description_inputs}
                        multiline = {true}
                        placeholder = "무슨 생각을 하고 계신가요?"
                        editable = {true}
                        onChangeText = {(description) => this.setState({
                            description
                        })}
                        value={this.state.description}
                    />
                </View>
                <IconButton
                    icon = "image-plus"
                    type="MaterialCommunityIcons"
                    onPress={(e) => this.putImage(e)}
                />
                <IconButton
                    icon="send"
                    type="MaterialCommunityIcons"
                    onPress = {(e) => this.onClickListener(e)}
                />

                <IconButton
                    icon="menu-left-outline"
                    type="MaterialCommunityIcons"
                    onPress = {(e) => {this.PostsendData(e)}}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBox:{
        width:250,
        height:45,
        borderBottomColor:'black',
        borderBottomWidth:3,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    descriptionBox:{
        width:400,
        height:300,
        flexDirection:'row',
        borderBottomWidth:3,
        borderBottomColor:'black',
        marginBottom:20
    },
    title_inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor:"#FFFFFF",
        flex:1,
    },
    description_inputs:{
        flex:1,
        borderBottomColor:"#FFFFFF",
        marginLeft:16,
        height:300
    }
});