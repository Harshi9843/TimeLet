import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class TimetableScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
               <View>
                    <MyHeader title = "TimeLet" />   
                </View> 

            <Text style = {styles.days}>
                Monday            Tuesday            Wednesday            Thursday            Friday           Saturday            Sunday
            </Text>

            <Text style = {{marginTop: 50, fontFamily: 'bold', fontSize: 20}}>
                10:00        Wake-Up              Wake-up              Wake-Up             Wake-Up       Wake-Up         Wake-Up             Wake-Up
            </Text>
            <Text style = {styles.time}>
                12:00        Practice             Practice                Practice                 Practise                 Practice       Practice             Practice   
            </Text>
            <Text style = {styles.time}>
                14:00        Lunch                  Lunch                    Lunch                 Lunch               Lunch             Lunch                Lunch
            </Text>
            <Text style = {styles.time}>
                16:00        Study               Study                      Study                    Study                Study               Study                  Study
            </Text>
            <Text style = {styles.time}>
                18:00        Dinner            Dinner                   Dinner                 Dinner                   Dinner           Dinner                Dinner
            </Text>



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
        marginLeft: 1240,
        marginTop: 270,
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

    days:{
        marginLeft: 100,
        fontFamily: 'bold',
        fontSize: 20
    },

    time:{
        marginTop: 30,
        fontFamily: 'bold',
        fontSize: 20
    }
})