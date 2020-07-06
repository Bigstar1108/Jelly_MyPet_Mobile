import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { IconButton, Colors } from 'react-native-paper';

import HomeTab from './AppTabNavigator/HomeTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SnackRecommendTab from './AppTabNavigator/SnackRecommendTab';
import TeamTab from './AppTabNavigator/TeamTab';
import BeforeTab from './Login/BeforeTab';

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab : { screen : HomeTab },
    SnackRecommendTab : { screen : SnackRecommendTab },
    ProfileTab : { screen : ProfileTab },
    TeamTab : { screen : TeamTab },
},
{
    tabBarPosition:"bottom",
    swipeEnabled:true,
    animationEnabled: true,
    tabBarOptions:{
        style:{
            ...Platform.select({
                ios:{
                    backgroundColor:'white',
                },
            }),
        },
        backgroundColor:'white',
        iconStyle: { height: 50 },
        activeTintColor: "black",
        inactiveTintColor: "#d1cece",
        upperCaseLabel:false,
        showLabel:false,
        showIcon:true,
        
    }
}
)


class TopBarImage extends Component {
    render(){
        return(
            
            <View style={{flexDirection: 'row'}}>
                <StatusBar barStyle="dark-content"/>
                <Image
                    source={require('../img/Logo.png')}
                    style={{width:40, height:40, borderRadius: 40/2, marginLeft:15}}
                /> 
            </View>
        );
    }
}

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component{

    static navigationOptions = {
        headerLeft: <TopBarImage />,
        title:'MyPet',

    }

    state = {
        checkLogin : true
    }

    render(){
        return(
            this.state.checkLogin ? <AppTabContainer /> : <BeforeTab />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});