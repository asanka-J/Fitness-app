import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from "react-native";
import GoalItem from '../components/GlistItem';
import GoalInput from '../components/GlistInput';
import Post from '../components/post';

import firebase from '../config/firebase'

export default function Goal() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    
    setCourseGoals(courseGoals => [
       ...courseGoals,{id:Math.random().toString() , value:goalTitle} ]);

       setisAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal) => goal.id!==goalId);
    });
  };

  const cancelGoalHandler = () => {
   setisAddMode(false);
  };

      var ref = firebase.database().ref("contacts");
      ref.once("value")
        .then(function(snapshot) {
          // var key = snapshot.key; // "ada"
          // var childKey = snapshot.child("name/last").key; // "last"
          console.log(snapshot);
        });



        
  return (
    <View style={styles.screen}>
   <Button title="Add new Goal" onPress={()=>setisAddMode(true)}/>  
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>
      
      <View style={styles.goalList}>  
        <FlatList 
          keyExtractor={(item,index)=>item.id}
          data={courseGoals} renderItem = {
            itemData=>( 
              // <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/> 
              <Post title='Cafeteria strategies that may improve your diet' postimage={{uri:postimage}}  profileimage= {{uri: 'https://i.pravatar.cc/150?img=3' }} />
            )}>
        </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 30 ,marginTop: 22 },
  goalList:{
    width: '100%',
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    marginTop:4,
    
    
  }
});
