import React from 'react';
import {View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import TimetableScreen from './screens/TimetableScreen';
import WaterReminderScreen from './screens/WaterReminderScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  HomeScreen:{screen:HomeScreen},
  TimetableScreen:{screen:TimetableScreen},
  WaterReminderScreen: {screen:WaterReminderScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator)

