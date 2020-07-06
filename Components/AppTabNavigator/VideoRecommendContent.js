import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking, SafeAreaView, RefreshControl  } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import axios from 'axios';

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}  

export default class VideoRecommendContent extends Component {
    
    handleClick(){
        num = getRandomNumber(0, 10);
        num2 = getRandomNumber(0, 10);
        num3 = getRandomNumber(0, 10);
        this.setState({
            num1: num,
            num2: num2,
            num3: num3
        });
        this.fetchUrl();
    }
    
    fetchUrl(){
        axios.get('http://10.80.162.116:6000/rcmnd')
        .then((response) => {
            this.setState({
                First_Video_Thumbnail : response.data.data.thumbnails[this.state.num1].medium.url,
                Second_Video_Thumbnail : response.data.data.thumbnails[this.state.num2].medium.url,
                Third_Video_Thumbnail : response.data.data.thumbnails[this.state.num3].medium.url,
                Video_title : response.data.data.title,
                Video_url_id : response.data.data.video_id,
                Video_status : response.data.data.message,
            })
            //console.log(this.state.Video_title[0]);
            //console.log(this.state.Video_Thumbnail);
            console.log(response);
            console.log(Video_status);
        })
    }

    componentDidMount(){
        this.fetchUrl();
    }

    state = {
        First_Video_Thumbnail : '',
        Second_Video_Thumbnail : '',
        Third_Video_Thumbnail : '',
        Video_title : [],
        Video_url_id : [],
        Video_status : '',
        num1 : 0,
        num2 : 1,
        num3 : 2,
    }

    render(){
        return(
                <View style={style.container}>
                    <View style={style.VideoInformationBox}>
                        <View style={style.Video_infor}>
                            <View style={style.Video_Thumbnail}>
                                <Image
                                    source={{ uri : this.state.First_Video_Thumbnail}}
                                    style={{width:250, height:130}}
                                />
                            </View>
                            <Text numberOfLines = {1} style={style.Video_title_text}>- {this.state.Video_title[this.state.num1]}</Text>
                        </View>
                        <View>
                            <IconButton
                                icon="play-circle-outline"
                                type="MaterialCommunityIcons"
                                onPress={() => {
                                    Linking.openURL(`https://www.youtube.com/watch?v=${this.state.Video_url_id[this.state.num1]}`);
                                }}
                                style={style.PlayIconButton}
                            />
                        </View>
                    </View>

                    <View style={style.VideoInformationBox}>
                        <View style={style.Video_infor}>
                            <View style={style.Video_Thumbnail}>
                                <Image
                                    source={{ uri : this.state.Second_Video_Thumbnail}}
                                    style={{width:250, height:130}}
                                />
                            </View>
                            <Text numberOfLines = {1} style={style.Video_title_text}>- {this.state.Video_title[this.state.num2]}</Text>
                        </View>
                        <View>
                            <IconButton
                                icon="play-circle-outline"
                                type="MaterialCommunityIcons"
                                onPress={() => {
                                    Linking.openURL(`https://www.youtube.com/watch?v=${this.state.Video_url_id[this.state.num2]}`);
                                }}
                                style={style.PlayIconButton}
                            />
                        </View>
                    </View>

                    <View style={style.VideoInformationBox}>
                        <View style={style.Video_infor}>
                            <View style={style.Video_Thumbnail}>
                                <Image
                                    source={{ uri : this.state.Third_Video_Thumbnail}}
                                    style={{width:250, height:130}}
                                />
                            </View>
                            <Text numberOfLines={1} style={style.Video_title_text}>- {this.state.Video_title[this.state.num3]}</Text>
                        </View>
                        <View>
                            <IconButton
                                icon="play-circle-outline"
                                type="MaterialCommunityIcons"
                                onPress={() => {
                                    Linking.openURL(`https://www.youtube.com/watch?v=${this.state.Video_url_id[this.state.num3]}`);
                                }}
                                style={style.PlayIconButton}
                            />
                        </View>
                    </View>

                    <IconButton
                        icon='refresh'
                        type='MaterialCommunityIcons'
                        style={style.IconButtonStyle}
                        onPress = {(e) => this.handleClick(e)}
                    />

               </View>

                
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    IconButtonStyle:{
        marginTop:40
    },
    VideoInformationBox:{
        marginTop:20,
        width:350,
        height:180,
        borderColor:'black',
        borderWidth: 1.5,
        flexDirection:'row',
        alignItems:'center'
    },
    Video_infor:{
        flex:9
    },
    Video_Thumbnail:{
        flex:1,
        marginLeft:10,
        marginTop:10
    },
    PlayIconButton:{
        flex:1,
        marginRight:25
    },
    Video_title_text:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
        marginLeft:10
    }
})

