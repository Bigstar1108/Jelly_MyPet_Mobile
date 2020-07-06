import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon  } from 'native-base';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-people" style={{ color : tintColor }}/>
        )
    }
    render() {
        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.container}>
                    
                    <View style={styles.First_InformationBox}>
                        <View style={styles.Image}>
                            <Image 
                                style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                                source={{uri:'https://pbs.twimg.com/media/De5B8r1V4AASQZg.jpg:large'}}
                            />
                        </View>
                        <View style={styles.Content}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15, marginLeft:10}}>Name : 황대성</Text>
                            <Text style={{fontSize:13, marginLeft:10}}>프론트엔드(안드로이드 및 Ios 개발)</Text>
                        </View>
                    </View>

                    <View style={styles.InformationBox}>
                        <View style={styles.Image}>
                            <Image 
                                style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                                source={{uri:'http://mblogthumb1.phinf.naver.net/MjAxNzA3MTRfOTIg/MDAxNTAwMDAwMTI1MTc5.UaO_-7U_3EfzaTSbkUraC33Mg7AvdcsjrcxHsDcBEEsg.j3tJvqK86FdExXLI41iKod6fJVTnwpgj-9yyP91Gi9Yg.JPEG.eoulimah/2.jpg?type=w800'}}
                            />
                        </View>
                        <View style={styles.Content}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15, marginLeft:10}}>Name : 이재민</Text>
                            <Text style={{fontSize:13, marginLeft:10}}>프론트엔드(로그인, 메인, 팀 페이지 개발)</Text>
                        </View>
                    </View>

                    <View style={styles.InformationBox}>
                        <View style={styles.Image}>
                            <Image 
                                style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                                source={{uri:'http://file2.instiz.net/data/file/20150916/7/c/c/7cc67d4858003fcf05282f83022726ee.jpg'}}
                            />
                        </View>
                        <View style={styles.Content}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15, marginLeft:10}}>Name : 오해성</Text>
                            <Text style={{fontSize:13, marginLeft:10}}>백엔드(서버 개발)</Text>
                        </View>
                    </View>

                    <View style={styles.InformationBox}>
                    <View style={styles.Image}>
                            <Image 
                                style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                                source={{uri:'https://file2.nocutnews.co.kr/newsroom/image/2015/06/03/20150603160343723825.jpg'}}
                            />
                        </View>
                        <View style={styles.Content}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15, marginLeft:10}}>Name : 진정호</Text>
                            <Text style={{fontSize:13, marginLeft:10}}>프론트엔드(추천 글 및 영상 페이지 개발)</Text>
                        </View>
                    </View>

                    <View style={styles.InformationBox}>
                        <View style={styles.Image}>
                            <Image 
                                style={{width:100, height:100, borderWidth:1, borderRadius:50, borderColor:'white', marginLeft:10}}
                                source={{uri:'https://t1.daumcdn.net/cfile/tistory/99084A425C8F7B1D24'}}
                            />
                        </View>
                        <View style={styles.Content}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15, marginLeft:10}}>Name : 최주영</Text>
                            <Text style={{fontSize:13, marginLeft:10}}>디자인기획(페이지의 전반적인 디자인 기획)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    First_InformationBox:{
        marginTop:30,
        width:350,
        height:130,
        borderColor:'black',
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems:'center'
    },

    InformationBox: {
        marginTop:30,
        width:350,
        height:130,
        borderWidth:1.5,
        borderColor:'black',
        flexDirection: 'row',
        alignItems: 'center'
    },

    Image:{
        flex:1,
    },

    Content:{
        flex:2,
    }
    
});