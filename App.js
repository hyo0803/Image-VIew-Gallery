import 'react-native-gesture-handler';
import  { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import  HomeScreen  from './components/HomeScreen';
import HomeTabs from './components/HomeTabs';
import  Preview  from './components/Preview';

import { createStackNavigator } from '@react-navigation/stack';
import {  } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="YKGallery">
      <Stack.Screen 
      name="Home" 
      component={HomeTabs} 
      options={{
          headerStyle: {
            backgroundColor: '#231942',
          },
          headerTintColor: "#E0B1CB",
        }}
      />
      <Stack.Screen 
        name='Preview'
        component={Preview}
        options={{
          headerStyle: {
            backgroundColor: '#231942',
          },
          headerTintColor: "#E0B1CB",
          headerBackTitle: "Home"
        }}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;