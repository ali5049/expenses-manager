import React, { Component } from 'react';
import {TouchableHighlight} from 'react-native'
import {Card,View, CardItem, Body, Right,Left, Text,Icon} from 'native-base';
export default function cards({txt ="abc",onPress}){
return(
    <TouchableHighlight onPress={onPress} style={{}} underlayColor='transparent'>
    <Card   style={{ alignItems:'center',justifyContent:'center'}}
    >
    <CardItem style={{alignItems:'center',justifyContent:'center'}} >
    <Text style={{color:'#006600'}}>Total Expenses: </Text>
    <Text style={{color:'#006600'}}>{"RS "+txt+".00"}</Text>
      </CardItem>
    
    </Card>
    </TouchableHighlight>
);
}
