import { StyleSheet } from "react-native"
import { Constants } from 'expo';

export default StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#fff',
          padding: 8,
        },
        titleView: {
          flex: 0,
          justifyContent: 'center',
          height: 60,
          marginBottom: 25,
        },
        titleText: {
          flex: 0,
          textAlign: 'center',
          fontSize: 48,
          color: '#444',
        },
        timerview: {
          flex: 0,
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 80,
          color: '#444',
          height: 100,
          borderRadius: 5,
          marginBottom: 50,
          marginTop: 50,
          borderColor: '#444',
          borderWidth: 1,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#eee',
          width: 275,
        },
        timercomponent: {
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          width: 220,
        },
        timerselector: {
          flex: 1,
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 40,
          color: '#444',
        },
        timerselectortitle: {
          flex: 0,
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 24,
          color: '#0B173B',
          height: 30,
          marginBottom: 10,
        },
        actionButtons: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 50,
        },
        button: {
          flex: 1,
          justifyContent: 'center',
          height: 50,
          margin: 15,
          borderRadius: 10,
        },
        buttonTitle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center',
        },
        startButton: {
          backgroundColor: 'green',
        },
        stopButton: {
          backgroundColor: 'orange',
        },
        resetButton: {
          backgroundColor: 'red',
        },
        arrowButton: {
          flex: 0,
          justifyContent: 'center',
          height: 30,
          width: 30,
        },
        timerObject: {
          flex: 0,
          width: 70,
          height: 100,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      
})