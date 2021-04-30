import React, {useState, useEffect} from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import Timer from './components/Timer';

export default function App()  {
    const [pause, setPause] = useState(false)

    //useEffect(()=>{console.log(pause)},[pause])
    return (      
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}> 
        <Timer/>
      </KeyboardAvoidingView>      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
},
})