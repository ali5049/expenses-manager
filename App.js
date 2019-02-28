import React, { Component } from 'react';
import {View,StyleSheet,AsyncStorage} from 'react-native';
import {
  DotIndicator
} from 'react-native-indicators';
import Nav from './components/nav';
import LoggedIn from './components/loggedInNav';
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
export default class App extends Component<{}> {
 constructor(props) {
   super(props);
 
   this.state = {
    isProcessing:true,
    success:true,
    loggedIn:false
   };
 }
  componentDidMount(){
   
const config = {
    apiKey: "#",
    authDomain: "#",
    databaseURL: "#",
    projectId: "#",
    storageBucket: "e#",
    messagingSenderId: "#"
  };

 firebase.initializeApp(config);
    AsyncStorage.getItem('uid')
    .then((uid) => {
      if(uid){
        this.setState({loggedIn:true,isProcessing:false})
      }
      else{
        this.setState({isProcessing:false})
      }
    })
   }
 
  render() {

    if(this.state.loggedIn && !this.state.isProcessing) {

      return (
      <LoggedIn/>
      );

    }

    else if( !this.state.isProcessing){

      return (
        <Nav/>
        );
    }
    else{
      return(
        <DotIndicator color="green"/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#fff'
    }
  });
