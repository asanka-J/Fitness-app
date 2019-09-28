import React, { Component  } from 'react';
import { StyleSheet, Platform, Image, Text, View ,Button} from 'react-native'
import * as Font  from 'expo-font';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/Ionicons';
// import * as firebase from 'firebase';
import firebase from './config/firebase';
import 'firebase/firestore';

// import auth screens
import Loading from './screens/Loading'
import SignUp from './screens/Signup'
import Login from './screens/Login'
import Main from './screens/Main'
import Profile from './screens/profile'
import Diet from './screens/diet'
import Workout from './screens/workout'
import Map from './screens/map'
import ExerciseType from './screens/exerciseType'



// import componenets
import LogoutHandler from './components/logout'
import profile from './screens/profile';

import List from './screens/listLoader';


// Firebase: Cloud Firestore
export const database = firebase.firestore();


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

// create our app's navigation stack
const DashboardStackNavigator = createStackNavigator(
  {
    Home: Main,
    LogoutHandler: LogoutHandler,
    profileStack:Profile,
    dietStack:Diet,
    workoutStack:Workout,
    mapStack:Map,
    exerciseTypeStack:ExerciseType

  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      // const { routeName } = navigation.state.routes[navigation.state.index];// get the stack header of the selected tab navigator
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 5, color: '#fff' }} onPress={() => navigation.openDrawer()} name="md-menu" size={20} />
        ),
        headerRight: (
          <Icon style={{ marginRight: 20,color: '#fff', }} name="md-log-out" size={20} onPress={() => navigation.navigate('LogoutHandler')} />
          
        ), 
        
        
      };
    }
  }
);

const navprofileStack = createStackNavigator({
  Settings: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'profile',
        headerLeft: (
          <Icon style={{ paddingLeft: 5, color: '#fff' }} onPress={() => navigation.openDrawer()} name="md-menu" size={20} />
        ),
        headerRight: (
          <Icon style={{ marginRight: 20,color: '#fff', }} name="md-log-out" size={20} onPress={() => navigation.navigate('LogoutHandler')} />
        ),
      };
    }
  }
});

const navMealsStack = createStackNavigator({
  Settings: {
    screen: Diet,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Diet',
        headerLeft: (
          <Icon style={{ paddingLeft: 5, color: '#fff' }} onPress={() => navigation.openDrawer()} name="md-menu" size={20} />
        ),
        headerRight: (
          <Icon style={{ marginRight: 20,color: '#fff', }} name="md-log-out" size={20} onPress={() => navigation.navigate('LogoutHandler')} />
        ),
      };
    }
  }
});

const HomeStack = createStackNavigator({
  Settings: {
    screen: Main,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home page',
       
        headerLeft: (
          <Icon style={{ paddingLeft: 5, color: '#fff' }} onPress={() => navigation.openDrawer()} name="md-menu" size={20} />
        ),
        headerRight: (
          <Icon style={{ marginRight: 20,color: '#fff', }} name="md-log-out" size={20} onPress={() => navigation.navigate('LogoutHandler')} />
        ), 
      };
    }
  }
});


const navWorkoutStack = createStackNavigator({
  Settings: {
    screen: Workout,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 5, color: '#fff' }} onPress={() => navigation.openDrawer()} name="md-menu" size={20} />
        ),
        headerRight: (
          <Icon style={{ marginRight: 20,color: '#fff', }} name="md-log-out" size={20} onPress={() => navigation.navigate('LogoutHandler')} />
        ),
      };
    }
  }
});

// App drawer navigation
const AppDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerLabel: ()=>null,
    }
  },
  Home: {
    screen: HomeStack
  },
  Profile: {
    screen: navprofileStack
  },
  Workout: {
    screen: navWorkoutStack
  },
  Meal: {
    screen: navMealsStack
  }
  

},  {
  drawerWidth: 200,
  drawerPosition: 'left',
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'black',
    drawerType:'back',
    lazy:true
  }
});

const AppSwitchNavigator = createSwitchNavigator({
      Loading: { screen: Loading },
      SignUp: { screen: SignUp },
      Login: { screen: Login },
      Main: { screen: AppDrawerNavigator } //---->uncomment to work properly
      // Main: { screen: Diet }

    },
    {
      initialRouteName: 'Loading'
    }
  );

const AppcreateSwitchcontainer = createAppContainer(AppSwitchNavigator);

// create our app's styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    // marginHorizontal: 16,
    // justifyContent:"center"
  },
 
});