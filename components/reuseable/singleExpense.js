import React, { Component } from 'react';
import {TouchableHighlight,Image} from 'react-native'
import {Card,View, CardItem, Body, Right,Left, Text,Icon,Thumbnail} from 'native-base';
export default function sigleExpense({email = "abc",name,price = 123,date}){
    date = date.slice(0,15)

return(
   
    <Card
    >
      <CardItem>
              <Left>
                <Thumbnail small source={email=="alihayder133@gmail.com"?require('../../assets/ali.jpg'):email=="mr-saleem11519@hotmail.com"?require('../../assets/saleem.jpg'):
                email=="degixpert@gmail.com"?require('../../assets/aboubakar.jpg'):require('../../assets/logo.png')}/>
                <Body>
                  <Text>{name}</Text>
                  <Text note>{date}</Text>
                </Body>
              </Left>
              <Right style={{flexDirection:'row',justifyContent:'flex-end'}}>
              <Image source={require('../../assets/purse.png')}
              style={{width:20,height:20}} />
                  <Text style={{}}> {price}</Text>
                  </Right>
            </CardItem>
    </Card>
);
}