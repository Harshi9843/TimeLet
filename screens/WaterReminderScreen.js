import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WaterReminderScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <View>
                    <MyHeader title = "Water reminder" />
                </View>

                <Text style = {styles.time}>
                    Every 45 mins 
                </Text>
                <TouchableOpacity style = {styles.min} 
                onPress = {Alert.alert("Reminder is Set")}>
                    <Text style = {{fontFamily: 'bold', alignSelf: 'center', fontSize:15}}>
                        Set Reminder
                    </Text>
                </TouchableOpacity>

                <Text style = {styles.time}>
                    Every 1 hr
                </Text>
                <TouchableOpacity style = {styles.min}
                onPress = {Alert.alert("Reminder is Set")}>
                    <Text style = {{fontFamily: 'bold', alignSelf: 'center', fontSize:15}}>
                        Set Reminder
                    </Text>
                </TouchableOpacity>

                <Text style = {styles.time}>
                    Every 2 hr
                </Text>
                <TouchableOpacity style = {styles.min}
                onPress = {Alert.alert("Reminder is Set")}>
                    <Text style = {{fontFamily: 'bold', alignSelf: 'center', fontSize:15}}>
                        Set Reminder
                    </Text>
                </TouchableOpacity>

                <Text style = {styles.time}>
                    Every 2 hrs 30 min
                </Text>
                <TouchableOpacity style = {styles.min}
                onPress = {Alert.alert("Reminder is Set")}>
                    <Text style = {{fontFamily: 'bold', alignSelf: 'center', fontSize:15}}>
                        Set Reminder
                    </Text>
                </TouchableOpacity>

                <Text style = {styles.time}>
                    Every 3 hr
                </Text>
                <TouchableOpacity style = {styles.min}
                onPress = {Alert.alert("Reminder is Set")}>
                    <Text style = {{fontFamily: 'bold', alignSelf: 'center', fontSize:15}}>
                        Set Reminder
                    </Text>
                </TouchableOpacity>

                
            


                <TouchableOpacity style = {styles.backButton} 
                onPress = {()=>{this.props.navigation.navigate('HomeScreen')}}>
                <Text style = {styles.backText}>
                    Back
                </Text>
            </TouchableOpacity>
            </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    backButton:{
        backgroundColor: 'orange',
        borderRadius: 10,
        width: 150,
        marginLeft: 1205,
        marginTop: 60,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },

    backText:{
        fontSize: 20,
        fontFamily: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    time:{
        fontSize: 17,
        fontFamily: 'bold',
        marginLeft: 30,
        marginTop: 30,
    },
    
    min:{
        marginTop: 10,
        marginLeft: 35,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 12,
        width: 100,
        height: 40
    }
})