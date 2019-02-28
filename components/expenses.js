import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,ImageBackground,Image,TouchableHighlight,
  AsyncStorage
} from 'react-native';
import {Content} from 'native-base'
import ExpenseCard from './reuseable/expenseCard';
import AddExpense from './reuseable/addExpenseCard';
import GraphCard from './reuseable/graphCard';
import SingleExpense from './reuseable/singleExpense';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import {
  DotIndicator
} from 'react-native-indicators';
export default class Home extends Component<{}> {
  constructor(props) {

    super(props);
    this.state = {
      thing:null,
      price:null,
      email:null,
      total:null,
      saleem:null,
      ali:null,
      aboubakar:null,
      snap:null,
      loaded:false,
      adding:false
    };
  }
  componentWillMount(){

    const config = {
      apiKey: "AIzaSyCyQr4InbCCTCy3vFZDQt_SEq89j6z0uPQ",
      authDomain: "expenses-68abc.firebaseapp.com",
      databaseURL: "https://expenses-68abc.firebaseio.com",
      projectId: "expenses-68abc",
      storageBucket: "expenses-68abc.appspot.com",
      messagingSenderId: "574128980725"
    };
    if(!firebase.apps.length)
     firebase.initializeApp(config)
     else firebase.app();
     var ref = firebase.database().ref(this.props.account+'/');
     var that=this;
     ref.on("value", function(snap) {
       that.setState({loaded:true})
       var total=0,saleem=0,ali=0,aboubakar=0;
       if(snap.val()){
         that.setState({snap:snap.val()})
      Object.keys(snap.val()).map(k => {
        total+=Number(snap.val()[k].price);
        if(snap.val()[k].email=="alihayder133@gmail.com"){
          ali+= Number(snap.val()[k].price);
        }
        else if(snap.val()[k].email=="degixpert@gmail.com"){
          aboubakar+= Number(snap.val()[k].price);
        }
        else if(snap.val()[k].email=="mr-saleem11519@hotmail.com"){
          saleem+= Number(snap.val()[k].price);
        }
    })
  }
    that.setState({total,ali,saleem,aboubakar})
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  
    AsyncStorage.getItem("email").then((email)=>{
      this.setState({email})
    })
  }
  saveExpense(){
    if(this.state.thing && this.state.price)
    {
    this.setState({adding:true})
    firebase.database().ref(this.props.account+'/').push({
      email:this.state.email,
      thing:this.state.thing,
      price: this.state.price,
      date: String(new Date())
  }).then((data)=>{
      this.setState({thing:null,price:null,adding:false})
  }).catch((error)=>{
      //error callback
      this.setState({adding:false})
  })
  }
}
  render() {
    if(!this.state.loaded)
      return(
        <DotIndicator color="green"/>
      );
      else
    return (
    <View
      style={styles.container}>
     
     < ExpenseCard txt={this.state.total}/>
     <AddExpense onPress={()=>this.saveExpense()} onchangeName={(value)=>this.setState({thing:value})}
      onChangePrice={(value)=>this.setState({price:value})} thing={this.state.thing} price={this.state.price} processing={this.state.adding}/>
     <Content>
     <GraphCard saleem={this.state.saleem} aboubakar={this.state.aboubakar} ali={this.state.ali} 
     account={this.props.account}/>
     {this.state.snap?
     
     Object.keys(this.state.snap).reverse().map(k => {
       
       return(
      <SingleExpense email={this.state.snap[k].email} name={this.state.snap[k].thing} price={this.state.snap[k].price} date={this.state.snap[k].date}/>
       );
     })
     :null}
    
     </Content>

     </View>
    
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor:'#2e5b59',
  },
  
});
