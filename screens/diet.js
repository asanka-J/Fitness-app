import React ,{useState} from 'react';
import {View ,StyleSheet, Button, Text } from 'react-native';
import Post from '../components/post';





const diet = props=>{
    const [,set]=useState();

    var post2image="http://cdn.content.health.harvard.edu/media/newspics/d71b3518-1662-4fb5-9860-5d4ae0aaf6f0.jpg";
    
    var postimage=post2image;

    return(
        <View style={styles.screen}>
            <Post title='Cafeteria strategies that may improve your diet' postimage={{uri:postimage}}  profileimage= {{uri: 'https://i.pravatar.cc/150?img=3' }} />
            <Post title='Whole grains contain fiber and nutrients that can help your health.' postimage={{uri:post2image}} profileimage= {{uri: 'https://i.pravatar.cc/150?img=3'}}/>
        </View>
    );
};

const styles=StyleSheet.create({
  
    screen:{
        flex:1,
        padding:10,
       
    },

})

export default diet;