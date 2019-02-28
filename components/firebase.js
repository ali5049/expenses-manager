/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state={

    user:null
  }
  componentWillMount(){

    
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCyQr4InbCCTCy3vFZDQt_SEq89j6z0uPQ",
    authDomain: "expenses-68abc.firebaseapp.com",
    databaseURL: "https://expenses-68abc.firebaseio.com",
    projectId: "expenses-68abc",
    storageBucket: "expenses-68abc.appspot.com",
    messagingSenderId: "574128980725"
  };
  firebase.initializeApp(config);
  }
 
 login(email,password){
  let that = this;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => { console.log( res.user)
    firebase.database().ref('saleem/').push({
      email:'a',
      fname:'d',
      lname: res.user.refreshToken
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
    })
    .catch((err) => {
      console.log(err)
    });
    
  }
  getData(){
   var ref = firebase.database().ref("saleem/");
   ref.on("value", function(snap) {
    Object.keys(snap.val()).map(k => {
      console.log(snap.val()[k].email)
  })
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  }
  render() {
    return (
     
      <View style={styles.container}>
      <TouchableHighlight
      onPress={()=>this.getData()}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TouchableHighlight
      onPress={()=>this.login("alihayder133@gmail.com",'Hamdam@123')}>
        <Text style={styles.instructions}>{instructions}</Text>
        </TouchableHighlight>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
