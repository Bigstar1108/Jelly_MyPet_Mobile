import React, { Component } from 'react';
import { View, Text, StyleSheet, YellowBox, AsyncStorage } from 'react-native';
import { Icon, Container, Header, Item, Input, Button, Content, Alert } from 'native-base';
import axios from 'axios';
import CardContainer from '../CardComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';

console.disableYellowBox = true;

export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }}/>
        )
    }

    state={
        feeds: [],
    }

    fetchFeeds(){
        axios.get('http://10.80.162.116:6000/notice')
        .then((response) => {
            this.setState({
                feeds : response.data.data.post
            });
        })
        .catch((error) => {
            Alert.alert("Notice Error", "게시물 불러오기 실패!");
        })
    }

    componentWillMount(){
        this.fetchFeeds();
    }

    render() {
        return (
            <Container style={style.container}>
                <Content>
                    {
                        this.state.feeds.reverse().map(feed => <CardContainer data = {feed} />)
                    }

                    <IconButton
                        icon="refresh"
                        type="MaterialCommunityIcons"
                        style={style.IconButtonStyle}
                        onPress = {this.fetchFeeds()}
                    />

                </Content>
            </Container>
            
        );
      }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    IconButtonStyle:{
        alignItems:'center'
    }
});