import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,ImageBackground,Image,TouchableHighlight
} from 'react-native';
import Card from './reuseable/cards';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
export default class Home extends Component<{}> {
  static navigationOptions = {header:null};
  goNext(name){
    Actions.expenses({account:name})
  }
  render() {
    return (
    <View
      style={styles.container}>
      <Animatable.View animation="slideInDown" duration={2000}>
    <Card txt="Mutual" onPress={()=>this.goNext("mutual")}/>
    </Animatable.View>
    <Animatable.View animation="slideInUp" duration={2000}>
    <Card txt="Aboubakar + Ali" onPress={()=>this.goNext("Aboubakar + Ali")}/>
    </Animatable.View>
    <Animatable.View animation="slideInLeft" duration={2000}>
    <Card txt="Aboubakar + Saleem" onPress={()=>this.goNext("Aboubakar + Saleem")}/>
    </Animatable.View>
    <Animatable.View animation="slideInRight" duration={2000}>
    <Card txt="Saleem + Ali" onPress={()=>this.goNext("Saleem + Ali")}/>
    </Animatable.View>
    
     </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor:'#2e5b59',
    justifyContent:'center',
    paddingLeft:'8%'
  },
  
});
