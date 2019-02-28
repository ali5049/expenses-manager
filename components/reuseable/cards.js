import React, { Component } from 'react';
import {TouchableHighlight} from 'react-native'
import {Card,View, CardItem, Body, Right,Left, Text,Icon} from 'native-base';
export default function cards({txt ="abc",onPress}){
return(
    <TouchableHighlight onPress={onPress} style={{}} underlayColor='transparent'>
    <Card   style={{ width:'90%',alignItems:'center',justifyContent:'center'}}
    >
    <CardItem style={{alignItems:'center',justifyContent:'center'}} >
     
      <Icon name="md-pie" style={{color:'#006600',fontSize:30}}/>
      
      </CardItem>
      <CardItem style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#006600'}}>{txt}</Text>
      </CardItem>
    </Card>
    </TouchableHighlight>
);
}