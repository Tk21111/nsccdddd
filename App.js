import React from 'react';
import { View, Button, Text } from 'react-native'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cmd from './screen/cmd';
import CreateUser from './screen/createUser';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Cmd}/>
        <Stack.Screen name="Createuser" component={CreateUser} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
