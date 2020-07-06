import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content } from 'native-base';
import axios from 'axios';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ScrollView } from 'react-native-gesture-handler';
import SnackRecommendContent from './SnackRecommentContent';
import VideoRecommendContent from './VideoRecommendContent';

export default class HomeTab extends Component {
    constructor(){
        super();
        this.state={
            selectedIndex: 0
        };
    }
    
    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
/*
    componentDidMount(){
        axios.get('http://10.80.162.116:8080/rcmnd')
        .then(response => {
            console.log(response);
            this.setState({Recommend_Video:response.data.title})
        });
        console.log("Finish")
    }
*/
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="cookie" type="MaterialCommunityIcons" style={{ color : tintColor }}/>
        )
    }

    render() {
        return (
            <View style={style.container}>
                <SegmentedControlTab
                        values={["Snack", "Video"]}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        activeTabStyle={style.activeTabStyle}
                        tabTextStyle={style.tabTextStyle}
                        tabStyle={style.tabStyle}
                    />
                <ScrollView>
                <View style = {style.SnackContainer}>
                    {this.state.selectedIndex===1 ? <VideoRecommendContent /> : <SnackRecommendContent />}
                </View>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    SnackContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    
    activeTabStyle:{
        backgroundColor:'black'
    },
    tabTextStyle:{
        color:'black'
    },
    tabStyle:{
        borderColor:'black',
        marginTop:10,
        paddingVertical:5
    },
    
    
});