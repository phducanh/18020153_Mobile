import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./assets/styles.js"

const ActionButtons = props => {
    return (
      <View style = {styles.actionButtons} >
        <StartButton start = {props.start}/>
        <StopButton start = {props.stop}/>
        <ResetButton reset = {props.reset}/>
      </View>
    );
  }
  
  const StartButton = props =>  {
      return (
        <TouchableOpacity style = {[styles.startButton, styles.button]} onPress = {props.start} >
           <Text style = {styles.buttonTitle}>Start</Text>
         </TouchableOpacity>
      );
  }

  const StopButton = props =>  {
    return (
      <TouchableOpacity style = {[styles.stopButton, styles.button]} onPress = {props.start} >
         <Text style = {styles.buttonTitle}>Stop</Text>
       </TouchableOpacity>
    );
}
  
  const ResetButton = props => {
    return (
      <TouchableOpacity style = {[styles.resetButton, styles.button]} onPress = {props.reset} >
         <Text style = {styles.buttonTitle}>Reset</Text>
       </TouchableOpacity>
    );
  }

  export default ActionButtons