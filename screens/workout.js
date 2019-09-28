import React ,{useState} from 'react';
import {View ,StyleSheet, Button, Text } from 'react-native';
import Post from '../components/post';





const exercise = props=>{
    const [,set]=useState();

    var postimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGiDrV3FXlDaIIN7FNRiH6-QHO040kQfsBG6wJDKPnGFqTozD";
    var post2image="https://healthnfitnessclub.com/wp-content/uploads/2018/12/hemmer-curl.jpg";
    
    return(
        <View style={styles.screen}>
            <Post title='Flat Tummy Tips: 7 Steps to a get flat tummy in 7 days' postimage={{uri:postimage}}  profileimage= {{uri: 'https://i.pravatar.cc/150?img=5' }} />
            <Post title='Best biceps exercise in gym' postimage={{uri:post2image}} profileimage= {{uri: 'https://i.pravatar.cc/150?img=4'}}/>
        </View>
    );
};

const styles=StyleSheet.create({
  
    screen:{
        flex:1,
        padding:10,
       
    },

})

export default exercise;