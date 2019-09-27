import React, { Component  } from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import * as Font  from 'expo-font';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';


// import the different screens
import Loading from './screens/Loading'
import SignUp from './screens/Signup'
import Login from './screens/Login'
import Main from './screens/Main'
// create our app's navigation stack

export default class App extends Component {

  state = {
    fontLoading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      
    })
    this.setState({ fontLoading: false })
  }

  render() {
       if (this.state.fontLoading) {
         return (
           <View></View>
         );
       }

        return (
          <View style={styles.screen}>
        
            <AppcreateSwitchcontainer/>
    
        </View>
                )
   }
} // App component end

const AppSwitchNavigator = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

const AppcreateSwitchcontainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    justifyContent:"center"
  },
 
});