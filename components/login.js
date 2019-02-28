import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Image, Switch,StatusBar,AsyncStorage
} from 'react-native';
import {
  DotIndicator
} from 'react-native-indicators';
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import { Button, Icon, Item, Input, Label, Content, Form, Container, CheckBox } from 'native-base';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import { isNonNullObject } from '@firebase/util';
export default class LoginComponent extends Component<{}> {
    constructor(props) {

        super(props);
        this.state = {
            email:null,
            password:null,
            showPassword: false,
            error:null,
            processing:false
        };
  this.emailChange = this.emailChange.bind(this);
  this.passChange = this.passChange.bind(this);
           // this.doRender();
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
        if(!firebase.apps.length)
     firebase.initializeApp(config)
     else firebase.app();
        }
    showPass() {
        if (this.state.showPassword) {
            this.setState({
                showPassword: false
            });
        }
        else {
            this.setState({
                showPassword: true
            });
        }
    }
    emailChange(value){
        this.setState({
    email:value,
    error:null
});
    }
      passChange(value){
        this.setState({
    password:value,
    error: null
});
    }
    login(){
        this.setState({processing:true})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => { console.log( typeof(res.user.uid))
            this.setState({error:null,processing:false})

           AsyncStorage.setItem("uid",res.user.uid);
           AsyncStorage.setItem("email",res.user.email);
            Actions.reset('accounts');
        })
        .catch((err) => {
            if(err)
          this.setState({error: err.message,processing:false});
        });
        
        
    }
    doRender(){
        Actions.reset('loginHome');
    }
    static navigationOptions = { header: null };
    render() {
        let processing = this.state.processing;
        
        return (
           
            <Container
                style={styles.container}>
                 <StatusBar
     backgroundColor="#2e5b59"
     barStyle="light-content"
   />
                <Animatable.View animation="fadeIn" duration={3000}>
                    <Image source={require('../assets/logo.png')}
                        style={styles.logoImage}></Image>
                </Animatable.View>
                <Content>
                    <Form style={{ margin: 20 }}>
                        <Item floatingLabel>
                            <Label style={{color:'white'}}>Email</Label>
                            <Icon name="md-person" style={{color:'white'}}/>
                            <Input value={this.state.email} onChangeText={(value) =>this.emailChange(value)}
                             style={{color:'white'}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color:'white'}}>Password</Label>
                            <Icon name="md-lock" style={{color:'white'}}/>
                            <Input value={this.state.password} secureTextEntry={!this.state.showPassword} onChangeText={(value) =>this.passChange(value)}
                            style={{color:'white'}}/>
                        </Item>
                        <View style={styles.showpass}>
                            <Switch value={this.state.showPassword} onValueChange={() => this.showPass()} />
                            <Text style={{color:'white'}}>Show Password</Text>
                        </View>
                        {this.state.error?
                        <Text style={styles.loginError}>{this.state.error}</Text>
                        :null}
                        {!processing?
                        <Button block onPress={() =>this.login()}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </Button>:<DotIndicator color="#55ACEF" style={{marginTop:'12%'}}/>}
                        
                      

                    </Form>

                </Content>
            </Container>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#2e5b59'
    },
    logoImage: {
        marginTop: '30%',
        width: 95,
        height: 90,
        alignSelf: 'center',

    },
    showpass: {
        margin: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    loginError:{
        alignSelf: 'center',
        color:'red'
    },
    buttonStyle:{
        marginLeft:'8%',
        marginRight:'8%',
        marginTop:'8%',
        padding:'3%',
        justifyContent:'center',
        borderRadius:25,
        backgroundColor:'white',
        
      },
      loaderStyle:{
        marginLeft:'8%',
        marginRight:'8%',
        marginTop:'8%',
        padding:'3%',
        justifyContent:'center',
        
      },
      buttonText:{
        fontSize:22,
        marginBottom:5,
        fontWeight:'bold'
      },
});
