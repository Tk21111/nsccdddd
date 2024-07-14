import React from 'react';
import { View, Button, Text } from 'react-native'; 

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Cmd from './screen/cmd';
import CreateUser from './screen/createUser';
import ListUpdate from './screen/Test4';
import Home from './screen/Home';
import List from './screen/List';
import List1 from './screen/List1';
import Cal from './screen/Cal';
import Incal from './screen/InCal';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="ListUpdate" component={ListUpdate} />
        <Stack.Screen name="List:note" component={List1}/>
        <Stack.Screen name="Createuser" component={CreateUser} />
        <Stack.Screen name="Calory" component={Cal} />
        <Stack.Screen name="Incal" component={Incal} />
        <Stack.Screen name="Cmd" component={Cmd}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
