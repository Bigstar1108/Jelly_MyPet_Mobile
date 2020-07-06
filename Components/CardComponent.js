import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { MenuProvider, MenuTrigger, MenuOption, MenuOptions, Menu } from 'react-native-popup-menu';
import update from 'react-addons-update';

export default class CardCompnent extends Component{

  state = {
    petImage : [
      {
          id : 0, //대성
          ImageUrl : 'http://www.fashionnetkorea.com/__boardstyle/FASHION/MGREPORT/images/20150518112053_151158171.JPG',
          checkLike : false,
          IconName : "ios-heart-empty",
          likes : 40,
          checkLikes : 41
      },
      {
          id : 1, //재민
          ImageUrl : 'http://image.kmib.co.kr/online_image/2017/0430/201704301035_61120011435772_1.jpg',
          checkLike : false,
          IconName : "ios-heart-empty",
          likes : 51,
          checkLikes : 52
      },
      {
          id : 2, //주영
          ImageUrl : 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27288646551CAE6219',
          checkLike : false,
          IconName : "ios-heart-empty",
          likes : 109,
          checkLikes : 110
        },
      {
          id : 3, //해성
          ImageUrl : 'http://mblogthumb1.phinf.naver.net/MjAxNzEwMjBfNTcg/MDAxNTA4NDc4NDU0ODQ3.jincfwfE-Q1Ro1PXdkMOpJpg9tdqUUSrcAUnCdT3Cugg.ai_jwofhwexStNzj4aStpTAhvbk0I5bWh6mJ_TASKAkg.PNG.fourmentrading/2017-10-20_14%3B46%3B59.PNG?type=w800',
          checkLike : false,
          IconName : "ios-heart-empty",
          likes : 47,
          checkLikes : 48
      },
      {
          id : 4,
          ImageUrl : 'https://post-phinf.pstatic.net/MjAxNzEyMDdfOTUg/MDAxNTEyNjI5NDE4NDc3.zhcTTu_GCZc_I-qqwKaxuETcMM0CdSNJuvrwoW6Dvesg.bilMsDBzK7R_tTAMsCR-Nt5MHtEH362h4PmEk8Nv8M0g.JPEG/thumb-d46268c12888b7b431eda53bbecac3f9_1512443367_7192_760x760.jpg?type=w1200',
          checkLike : false,
          IconName : "ios-heart-empty",
          likes : 21,
          checkLikes : 22
      },
      {
        id : 5,
        ImageUrl : 'https://scontent-lga3-1.cdninstagram.com/vp/ccd670d66b1b9736889fde675cc5de6c/5E2CD129/t51.2885-15/sh0.08/e35/s640x640/62506733_152524022579200_6008670738323392353_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=104',
        checkLike : false,
        IconName : "ios-heart-empty",
        likes : 31,
        checkLikes : 32  
      },
      {
        id : 6,
        ImageUrl : 'https://cdn.clien.net/web/api/file/F01/4295205/87ec8b043dd04a0b8fe.JPG?w=780&h=30000',
        checkLike: false,
        IconName : "ios-heart-empty",
        likes : 17,
        checkLikes : 18
      },
      {
        id : 7,
        ImageUrl : 'https://img.seoul.co.kr/img/upload/2018/12/08/SSI_20181208140733_V.jpg',
        checkLike : false,
        IconName : "ios-heart-empty",
        likes : 46,
        checkLikes : 47
      }
  ],
    num : 0,
    Login_check : "false"
  }

  findUser(){
   const { data } = this.props;
   if(data.userName === "황대성"){
     if(data.id === 52){
       this.setState({
         num : 5
       })
     }
     else{this.setState({
       num : 0
     })}
   }else{
     if(data.userName === "이재민"){
       if(data.id === 53){
         this.setState({
           num : 6
         })
       }else{
        this.setState({
          num : 1
        })
       }
     }else{
       if(data.userName === "최주영"){
         this.setState({
           num : 2
         })
       }else{
         if(data.userName === "오해성"){
           if(data.id === 54){
             this.setState({
               num : 7
             })
           }else{
            this.setState({
              num : 3
            })
           }
         }else{
           this.setState({
             num : 4
           })
         }
       }
     }
   }
  }

  onClick = () => {
      if(this.state.petImage[this.state.num].checkLike === false){
        if(this.state.petImage[this.state.num].likes < this.state.petImage[this.state.num].checkLikes){
          this.setState({
                petImage: update(
                  this.state.petImage,{
                    [this.state.num] : {
                      IconName : {$set : "ios-heart"},
                      likes : {$set : this.state.petImage[this.state.num].likes + 1},
                      checkLike : {$set : true}
                    }
                  }
                )
              })
              Alert.alert("안내", "로그인 후 더 많은 활동에 참여해보세요!");
        }else{
          console.log("error");
        }
      }else
      {
        if(this.state.petImage[this.state.num].likes === this.state.petImage[this.state.num].checkLikes){
           this.setState({
          petImage : update(
            this.state.petImage,{
              [this.state.num] : {
                IconName : {$set : "ios-heart-empty"},
                likes : {$set : this.state.petImage[this.state.num].likes - 1},
                checkLike : {$set : false}
              }
            }
          )
        })
        }else{
          console.log("error");
        }
      }
    }
    
  

  componentDidMount(){
    this.findUser();
  }

    render(){
      

        const { data } = this.props;
        const { value } = '';
      return (
        <Card>
          <CardItem>
            <Left>
              <Icon name = "face-profile" type="MaterialCommunityIcons" style={{marginRight:10}}/>
              <Body>
                <Text>{data.userName}({data.petName})</Text>
                <Text note>{data.date}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: this.state.petImage[this.state.num].ImageUrl }} 
              style={{ height:400, width:null, flex: 1 }} />
          </CardItem>
          <CardItem style={{ height:45 }}>
            <Left>
              <Button transparent onPress = {(e) => this.onClick(e)}>
                <Icon name={this.state.petImage[this.state.num].IconName} style={{ color:'red' }}/>
              </Button>
              <Text>{this.state.petImage[this.state.num].likes} likes</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Text style={{ fontWeight: '900' ,fontSize:15}}>{data.title}
                <Text style={{fontWeight:'800', fontSize:13}}>{"\n\n"}- {data.description}</Text>
            </Text>
            </CardItem>
            
          </Card>
      );
    }
  }
  

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
});