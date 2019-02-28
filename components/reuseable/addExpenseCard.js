import React, { Component } from 'react';
import {TouchableHighlight,StyleSheet,TextInput} from 'react-native'
import {Card,View, CardItem,Button, Body, Right,Left, Text,Icon, Input} from 'native-base';
import {
  DotIndicator
} from 'react-native-indicators';
export default function cards({onPress,onchangeName,onChangePrice,thing,price,processing = false}){
return(
    <TouchableHighlight onPress={onPress} style={{}} underlayColor='transparent'>
    <Card   style={{ }}
    >
  
      <CardItem style={styles.card}>
      {!processing?
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      
      <TextInput placeholder="Enter Thing" style={{marginRight:'5%',borderBottomWidth: 1,borderColor:'grey',width:'50%'}}
      onChangeText={onchangeName} value={thing}/>
      
     <TextInput maxLength={5} keyboardType="number-pad" placeholder="Price:" style={{borderBottomWidth: 1,borderColor:'grey'}}
     onChangeText={onChangePrice} value={price}/>
     <Right>
     <Button style={styles.buttonStyle}
     onPress={onPress}>
        <Icon name="md-add"/>
         </Button>
         </Right>
    </View>
    :<DotIndicator color='green'/>
      }
      </CardItem>
      
    </Card>
    </TouchableHighlight>
);
}
const styles = StyleSheet.create({
  buttonStyle:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'green',
  },
  card:{
    alignItems:'center',
    justifyContent:'center'
  }

})