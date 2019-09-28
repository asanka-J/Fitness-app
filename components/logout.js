// Main.js
import React from 'react'
import { View } from 'react-native'
import firebase from '../config/firebase'



export default class logout extends React.Component {
 
  handleLogout() {
    firebase.auth().signOut().then(function() {
      this.props.navigation.navigate('SignUp')
    }).catch(function(error) {
      // An error happened.
    });
  }

  componentDidMount() {
   
    this.handleLogout()
  }


render() { 
   
  
    return (
        <View ></View>
        )
  }
}
