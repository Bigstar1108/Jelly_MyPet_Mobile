import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking, SafeAreaView, RefreshControl } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}  

export default class SnackTab extends Component{
    handleClick(){
        num = getRandomNumber(0, 7);
        num2 = getRandomNumber(0, 7);
        num3 = getRandomNumber(0, 7);
        num4 = getRandomNumber(0, 7);
        this.setState({
            num1: num,
            num2: num2,
            num3: num3,
            num4: num4
        });
    }

    state ={
        num1: 0,
        num2: 1,
        num3: 2,
        num4: 3,
        information: [
            {
                id:0,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/46/45149_detail_01718338.jpg',
                ProductName: '더그린 스틱 54개입',
                Price: '- 9,300원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=45149'
            },
            {
                id:1,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/66/65983_detail_01246919.jpg',
                ProductName: '피니키 크리스피 치즈볼 30g',
                Price: '- 3,500원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=65983'
            },
            {
                id:2,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/66/65578_detail_01350575.jpg',
                ProductName: '[1 + 1] 퓨리나 원 체중건강 3.4kg',
                Price: '- 29,000원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=65578'
            },
            {
                id:3,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/67/66322_detail_01683622.jpg',
                ProductName: '아이엠 냠냠트릿 연어 80g',
                Price: '- 4,000원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=66322'
            },
            {
                id:4,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/66/65554_detail_01827764.jpg',
                ProductName: '시리우스 윌 풍미모락 칠면조 500g',
                Price: '- 15,900원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=65554'
            },
            {
                id:5,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/66/65569_detail_01473859.jpg',
                ProductName: '웰스비 그레인프리 2.4kg',
                Price: '- 45,900원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=65569'
            },
            {
                id:6,
                ImageUrl:'http://img.dogpre.com/web/dogpre/product/21/20044_detail_01164746.jpg',
                ProductName: '펫매트릭스 스마트본 치킨 미니 16개입',
                Price: '- 7,500원',
                ProductLink: 'http://www.dogpre.com/shop/goods/goods_view.php?goodsno=20044'
            },
        ]
    }
    
    

    render(){

        return(
            
            <View>
                
                <View style={style.SnackInformationBox}>
                    <View style={style.SnackImage}>
                        <Image 
                             style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                             source={{uri: this.state.information[this.state.num1].ImageUrl}}
                        />
                    </View>
                    <View style={style.SnackContent}>
                        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:5, marginLeft:10, marginTop:10}}>{this.state.information[this.state.num1].ProductName}</Text>
                        <Text style={{fontSize:15, marginLeft:10}}>{this.state.information[this.state.num1].Price}</Text>
                        <IconButton
                            icon="cart-plus"
                            type="MaterialCommunityIcons"
                            style={{
                                marginLeft:10
                            }}
                            onPress={() => {
                                Linking.openURL(this.state.information[this.state.num1].ProductLink);
                            }}
                            />
                    </View>
                </View>
 
                <View style={style.SnackInformationBox}>
                    <View style={style.SnackImage}>
                        <Image 
                             style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                             source={{uri: this.state.information[this.state.num2].ImageUrl}}
                        />
                    </View>
                    <View style={style.SnackContent}>
                        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:5, marginLeft:10, marginTop:10}}>{this.state.information[this.state.num2].ProductName}</Text>
                        <Text style={{fontSize:15, marginLeft:10}}>{this.state.information[this.state.num2].Price}</Text>
                        <IconButton
                            icon="cart-plus"
                            type="MaterialCommunityIcons"
                            style={{
                                marginLeft:10
                            }}
                            onPress={() => {
                                Linking.openURL(this.state.information[this.state.num2].ProductLink);
                            }}
                            />
                    </View>
                </View>

                <View style={style.SnackInformationBox}>
                    <View style={style.SnackImage}>
                        <Image 
                             style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                             source={{uri: this.state.information[this.state.num3].ImageUrl}}
                        />
                    </View>
                    <View style={style.SnackContent}>
                        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:5, marginLeft:10, marginTop:10}}>{this.state.information[this.state.num3].ProductName}</Text>
                        <Text style={{fontSize:15, marginLeft:10}}>{this.state.information[this.state.num3].Price}</Text>
                        <IconButton
                            icon="cart-plus"
                            type="MaterialCommunityIcons"
                            style={{
                                marginLeft:10
                            }}
                            onPress={() => {
                                Linking.openURL(this.state.information[this.state.num3].ProductLink);
                            }}
                            />
                    </View>
                </View>

                <View style={style.SnackInformationBox}>
                    <View style={style.SnackImage}>
                        <Image 
                             style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                             source={{uri: this.state.information[this.state.num4].ImageUrl}}
                        />
                    </View>
                    <View style={style.SnackContent}>
                        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:5, marginLeft:10, marginTop:10}}>{this.state.information[this.state.num4].ProductName}</Text>
                        <Text style={{fontSize:15, marginLeft:10}}>{this.state.information[this.state.num4].Price}</Text>
                        <IconButton
                            icon="cart-plus"
                            type="MaterialCommunityIcons"
                            style={{
                                marginLeft:10
                            }}
                            onPress={() => {
                                Linking.openURL(this.state.information[this.state.num4].ProductLink);
                            }}
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
    container: {
        flex: 1,
    },
    SnackContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    SnackInformationBox:{
        marginTop:15,
        width:350, 
        height:130,
        borderColor:'black',
        borderWidth: 1.5,
        flexDirection:'row',
        alignItems:'center'
    },
    SnackImage:{
        flex:1
    },
    SnackContent:{
        flex:2,
    },
    activeTabStyle:{
        backgroundColor:'black'
    },
    tabTextStyle:{
        color:'black'
    },
    tabStyle:{
        borderColor:'black',
        marginTop:10
    },
    IconButtonStyle:{
        marginTop:40,
        marginLeft:150
    }
    
});