import React, {useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';



const profile = props=>{
    const [,set]=useState();


    return(
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: 'https://i.pravatar.cc/150?img=3'}}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Asanka Jayasundara</Text>
            <Text style={styles.info}>Loose weight  / Be healthy</Text>
            <Text style={styles.description}>about me Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was p</Text>
            
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Edit profile</Text>  
            </TouchableOpacity>              
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>View my Profile</Text> 
            </TouchableOpacity>
          </View>
      </View>
    </View>
    );
};

const styles=StyleSheet.create({
  
    header:{
        backgroundColor: "#00bfff",
        height:180,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor:  "#00bfff",
      },
})

export default profile;