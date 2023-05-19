import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThirdScreen from './screens/ThirdScreen';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

export default App;
