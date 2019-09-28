import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class map extends Component {

    static navigationOptions = {
        title: 'Gyms around',
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
            <WebView geolocationEnabled={true}
            source={{ uri: 'https://www.google.lk/maps/search/gym+near+Kollupitiya,+Colombo/@6.9067773,79.8583986,13z' }}
          />
        )
    }
}
