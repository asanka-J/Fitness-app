import React from 'react';
import {View  , StyleSheet , Image} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { black } from 'ansi-colors';
import Colors from '../constants/colors';

const Header2 = props => {
return (
  <Card>
  
  <CardItem cardBody>
    <Image source={{uri: 'https://www.normbondmarkets.com/agency/wp-content/uploads/2014/05/Fitness-Gym-Cover.png'}} style={{height: 200, width: null, flex: 1}}/>
  </CardItem>
  <Text/>
</Card>
);
};

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:10,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',

    },

    headerTitle:{
        color:'black',
        fontSize:18,
    }
});

export default Header2;