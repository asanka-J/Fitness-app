import React from 'react';
import { StyleSheet,TextInput,Text,TouchableOpacity, View} from "react-native";
  


 const GoalItem = props =>{
    return (
    <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}> 
      <View  style={styles.goalListItem} style={styles.goalListItem}>
        <Text >{props.title}</Text>
      </View>
    </TouchableOpacity> 
    );
 }


const styles = StyleSheet.create({
   
    goalListItem: {
    marginTop:5
      
      
    }
  });
  
  export default GoalItem;