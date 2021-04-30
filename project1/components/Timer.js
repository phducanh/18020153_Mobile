import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import vibrate from '../utils/vibrate'


export default function Timer(props) {

    // hooks states ===============================================

    const[startMinWork,setStartMinWork] = useState(25)

    const[startSecondWork, setStartSecondWork] = useState(0)

    const[startMinBreak,setStartMinBreak] = useState(5)

    const[startSecondBreak, setStartSecondBreak] = useState(0)
    
    const[minutes,setMinutes] = useState(startMinWork)

    const[seconds, setSeconds] = useState(startSecondWork)

    const[interv,setInterv] = useState(0)
    
    const[pause,setPause] = useState(false)

    const[workIsRunning, setWorkIsRunning] = useState(true)

    const[appInitializing, setAppInitializing] = useState(true)

    // hooks effects ================================================
    useEffect(
        ()=>{
            if(workIsRunning && !appInitializing){
                setPause(true)
                setMinutes(startMinWork)
                setSeconds(startSecondWork)
            }
            
            setAppInitializing(false)
        },
        [startMinWork, startSecondWork]
    )

    useEffect(
        ()=>{
            if(!workIsRunning){
                setPause(true)
                setMinutes(startMinBreak)
                setSeconds(startSecondBreak)
            }
            
        },
        [startMinBreak, startSecondBreak]
    )

    useEffect(  
        ()=>{
            if(workIsRunning) {
                setMinutes(startMinWork)
                setSeconds(startSecondWork)
            } else {
                setMinutes(startMinBreak)
                setSeconds(startSecondBreak)
            }
        },
        [workIsRunning]
    )

    useEffect(
        ()=>{
            if(!pause) {
                setInterv(()=>setTimeout(handleRunClock,1000))
            } else {
                clearTimeout(interv)
            }
        }, 
        [minutes,seconds,pause]
    )


    // handlers ===========================================

    function handleRunClock() {
        if(seconds<1) {
            if(minutes<1) {
                tick()
                return
            }
            setSeconds(59)
            setMinutes(minutes - 1)
        } else {
            setSeconds(seconds - 1)
        }
    }

    function tick() {
        setWorkIsRunning(!workIsRunning)
        vibrate()
    }

    function reset() {
        setPause(true)
        if(workIsRunning) {
            setMinutes(startMinWork)
            setSeconds(startSecondWork)
        } else {
            setMinutes(startMinBreak)
            setSeconds(startSecondBreak)
        }
    }

    // return ===================================================

    return (
        <View style={styles.container}>
            <Text style={[styles.label, workIsRunning ? styles.labelWorking : styles.labelBreak]}>{workIsRunning ? 'Work Time' : 'Break Time'}</Text>
            <Text style={styles.time}>
                   {
                    `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
                   }
            </Text>
            
            <View  style={styles.buttons}>
                <Button onPress={()=>{setPause(!pause)}} title={pause ? 'start' : 'pause'}/>
                <Button onPress={()=>{reset()}}title="reset"/>
            </View>

            <View style={styles.config}>
                <View style = {styles.configRow}>
                    <Text style={styles.textConfig}>
                        Work Time
                    </Text>

                    <TextInput 
                        onChange = {({nativeEvent})=>setStartMinWork(nativeEvent.text)}
                        value={startMinWork + ''} 
                        keyboardType={'numeric'} 
                        style={styles.textInput}
                    />

                    <Text style={styles.textConfig}>
                        :
                    </Text>

                    <TextInput 
                        onChange = {({nativeEvent})=>setStartSecondWork(nativeEvent.text)}
                        value={startSecondWork + ''} 
                        keyboardType={'numeric'} 
                        style={styles.textInput}
                    />

                </View>

                <View style = {styles.configRow}>
                    <Text style={styles.textConfig}>
                        Break Time
                    </Text>

                    <TextInput 
                        onChange = {({nativeEvent})=>setStartMinBreak(nativeEvent.text)}
                        value={startMinBreak + ''} 
                        keyboardType={'numeric'} 
                        style={styles.textInput}
                    />

                    <Text style={styles.textConfig}>
                        :
                    </Text>

                    <TextInput  
                        onChange = {({nativeEvent})=>setStartSecondBreak(nativeEvent.text)}
                        value={startSecondBreak + ''} 
                        keyboardType={'numeric'} 
                        style={styles.textInput}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    time: {
        color: 'black',
        fontSize: 70,
        fontWeight:'bold',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize:40,
        borderWidth: 2,
        padding: 5,
        color: 'white',
    },

    labelWorking: {
        backgroundColor: 'green',
    },

    labelBreak: {
        backgroundColor: 'red',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },

    config: {
        alignItems: 'stretch',
        padding: 20,
    },

    configRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    textInput: {
        borderWidth: 2,
        flexGrow: 4,
        flexShrink: 0,
        marginLeft: 5,
        marginRight: 5,
        paddingRight: 5,
        paddingLeft: 5,
    },

    textConfig: {
        flexGrow: 1,
        marginRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
        
    },


})