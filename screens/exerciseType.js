import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class ExerciseType extends Component {
    static navigationOptions = {
        title: 'Workout Types',
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
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default ExerciseType
