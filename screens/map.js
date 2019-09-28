import React ,{useState} from 'react';
import {View ,StyleSheet, Button, Text } from 'react-native';
import { WebView } from 'react-native-webview';



const map = props=>{
    const [,set]=useState();


    return(
        <WebView
        originWhitelist={['*']}
        source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18304.940170496317!2d79.85188674474168!3d6.902714887437398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgym%20around%20Kollupitiya%2C%20Colombo!5e0!3m2!1sen!2slk!4v1569589236798!5m2!1sen!2slk" width="100%" height="1600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>' }}
        style={{ marginTop: 5 }}
      />
    );
};

const styles=StyleSheet.create({
  
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },

})

export default map;