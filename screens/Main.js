// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View , Button} from 'react-native'
import firebase from '../config/firebase'

// import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyCgmHzAbTzKE6OCCOlFRc9DF_kactfXNCQ",
//   authDomain: "fitness-app-98135.firebaseapp.com",
//   databaseURL: "https://fitness-app-98135.firebaseio.com",
//   projectId: "fitness-app-98135",
//   storageBucket: "",
// };


export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  handleLogout() {
    firebase.auth().signOut().then(function() {
      this.props.navigation.navigate('SignUp')
    }).catch(function(error) {
      // An error happened.
    });
  }

render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="logout" onPress={this.handleLogout} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})