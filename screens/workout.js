import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PostList from './listLoader'
import Icon from '@expo/vector-icons/Ionicons';

export default class Workouts extends Component {

    static navigationOptions = {
        title: 'Workout',
        headerLeft: (
            <Icon style={{ paddingLeft: 5, color: '#fff' }} onPress={() => navigation.openDrawer()} name="md-menu" size={20} />
          ),
          headerRight: (
            <Icon style={{ marginRight: 20,color: '#fff', }} name="md-log-out" size={20} onPress={() => navigation.navigate('LogoutHandler')} />
            
          ), 
        headerTitleStyle: {
          color: 'white',
          marginLeft: 80,
          flex: 1,
          // fontFamily: 'Roboto_medium',
          fontWeight: '500'
        },
        headerStyle: {
          backgroundColor: '#000000',
        },
      };
    
    render() {
        return (
            <View>
                <PostList dataCollection='diet'/>
            </View>
        )
    }
}
