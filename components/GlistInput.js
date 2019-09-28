import React, {useState} from 'react'
import {Modal, StyleSheet,TextInput,Text,Button, View} from "react-native";

const GoalInput = props =>{

    const [enteredGoal, setEnteredGoal] = useState("");
    
    const inputGoalHandler = enteredGoal => {
        setEnteredGoal(enteredGoal);
      };

    const addGoalHandler = () => {
  
      props.onAddGoal(enteredGoal);
      setEnteredGoal();
    };
    
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.main}>
            <TextInput placeholder="Goal here" onChangeText={inputGoalHandler}  style={styles.goalInput} />
            
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Cancel" color="red" onPress={props.onCancel}/>
              </View>
              <View style={styles.button}>
                <Button title="Add"  onPress={addGoalHandler} />
              </View>
            </View>
        </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
   
    main: {
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    },
    goalInput: { width: '80%', borderColor: "black", borderWidth: 1, padding: 10,marginBottom:10},
    buttonContainer: {
      flexDirection:"row",
      justifyContent: "space-between",
      width: '50%',
    },
    button:{ width: '40%'},
   
  });

export default GoalInput;