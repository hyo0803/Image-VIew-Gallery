import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from "../components/HomeScreen"

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeSreen"
      activeColor="#E0B1CB"
      inactiveColor="#5E548E"
      barStyle={{ backgroundColor: '#231942' }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home'
        }}
        
      />
    </Tab.Navigator>
  );
}
export default HomeTabs;