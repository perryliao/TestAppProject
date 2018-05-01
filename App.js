import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles'

export default class App extends React.Component {
  constructor(props) {
    super(props) ;

    this.state = {
      username: '',
      password: '',
      password2: '',
      validUsername: false,
      validPassword: false,
      validConfirm: false
    };

    this.validateUsername = this.validateUsername.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  validateUsername(username) {
    if (username.length > 12 ||
      username.length < 1 ||
      username.includes(" ") ||
      username.match(/(~|!|@|#|%|&)/g) !== null) {
        this.setState({ validUsername: false });
      } else {
        this.setState({ validUsername: true });
      }
  }

  validatePassword(password) {
    if (password.length > 5 &&
       password.length < 17 &&
       !password.includes("123") &&
       !password.includes(" ") &&
       !password.includes(".") &&
       password.match(/(~|!|@|#|%|&)/g) !== null &&
       password.match(/[A-Z]/g) !== null &&
       password.match(/[a-z]/g) !== null &&
       password.match(/[0-9]/g) !== null) {
      this.setState({ validPassword: true });
    } else {
      this.setState({ validPassword: false });
    }
  }

  confirmPassword(pw1, pw2) {
    if (this.state.validPassword)
      this.setState({ validConfirm: pw1 === pw2});
}

  render() {
    const { validUsername } = this.state;
    const { validPassword } = this.state;
    const { validConfirm } = this.state;

      return (
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView>
            <View style={{flex: 1}}>
              <View style={styles.logo}>
                  <Image source={require('./resources/urEnvelope.png')} style={styles.logo} />
              </View>
            <Text style ={styles.title}> Create an account... </Text>
            {/*
              username
            */}
            <Text style ={styles.texts}> Username </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your username here!"
                onChangeText={(text) => {
                  this.setState({username: text});
                  this.validateUsername(text);
                }}
                returnKeyType = "next"
                />
                { validUsername && <Text style={styles.validMessage}>valid username</Text> }
                { !validUsername && <Text style={styles.errorMessage}>Usernames must be under 13 characters long.</Text> }
            {/*
              password
            */}
            <Text style ={styles.texts}> Password </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password here!"
              onChangeText={(text) => {
                this.setState({password: text});
                this.validatePassword(text);
                this.confirmPassword(text, this.state.password2)
              }}
              returnKeyType = "next"
              secureTextEntry = {true}
              />

              { validPassword && <Text style={styles.validMessage}>valid password</Text> }
              { !validPassword && <Text style={styles.errorMessage}>Enter a 6-16 digit password, containing at least 1 lower and upper case alphabet, 1 number and 1 symbol.</Text> }
              {/*
                confirm password
              */}
              <Text style ={styles.texts}> Confirm Password </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Re-enter your password here!"
                onChangeText={(text) => {
                  this.setState({password2: text});
                  this.confirmPassword(this.state.password, text);
                }}
                returnKeyType = "done"
                secureTextEntry = {true}
                />
                { validConfirm && <Text style={styles.validMessage}>valid confirm</Text> }
                { !validConfirm && <Text style={styles.errorMessage}>Passwords do not match, or is invalid! {this.state.password, this.state.password2, this.state.validConfirm}</Text> }

                <TouchableOpacity style ={styles.button}>
                  <Text style ={styles.buttonText}> CREATE ACCOUNT </Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  }
