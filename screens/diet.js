import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PostList from './listLoader'

export default class diet extends Component {
    static navigationOptions = {
        title: 'Diet',
        headerTitleStyle: {
          color: 'white',
          marginLeft: 100,
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
