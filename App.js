import React from 'react';
import { View, Button, Text } from 'react-native'; 

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Cmd from './screen/cmd';
import CreateUser from './screen/createUser';
import ListUpdate from './screen/UpdateFoodList';
import Home from './screen/Home';
import List from './screen/List';
import List1 from './screen/List1';
import Cal from './screen/Cal';
import Start from './screen/Start';
import Username from './screen/username';
import Profile from './screen/Profile';
import DataInpu from './screen/Data';
import Data1 from './screen/Data1';
import UserProfile from './screen/userProfile';
import CalendarScreen from './screen/cald';
import Hoo from './screen/hooo';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Username" component={Username}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Datain" component={DataInpu}/>
        <Stack.Screen name="Data1" component={Data1}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Carlendar" component={CalendarScreen}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="ListUpdate" component={ListUpdate} />
        <Stack.Screen name="List:note" component={List1}/>
        <Stack.Screen name="Hoo" component={Hoo}/>
        <Stack.Screen name="Createuser" component={CreateUser} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Calory" component={Cal} />
        <Stack.Screen name="Cmd" component={Cmd}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
