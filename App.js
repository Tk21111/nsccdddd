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
import Noti from './screen/Noti';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen options={{headerShown: false}} name="Start" component={Start}/>
        <Stack.Screen options={{headerShown: false}} name="Username" component={Username}/>
        <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
        <Stack.Screen options={{headerShown: false}} name="Datain" component={DataInpu}/>
        <Stack.Screen options={{headerShown: false}} name="Data1" component={Data1}/>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown: false}} name="Carlendar" component={CalendarScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Noti" component={Noti}/>
        <Stack.Screen options={{headerShown: false}} name="List" component={List}/>
        <Stack.Screen options={{headerShown: false}} name="ListUpdate" component={ListUpdate} />
        <Stack.Screen options={{headerShown: false}} name="List:note" component={List1}/>
        <Stack.Screen options={{headerShown: false}} name="Hoo" component={Hoo}/>
        <Stack.Screen options={{headerShown: false}} name="Createuser" component={CreateUser} />
        <Stack.Screen options={{headerShown: false}} name="UserProfile" component={UserProfile} />
        <Stack.Screen options={{headerShown: false}} name="Calory" component={Cal} />
        <Stack.Screen options={{headerShown: false}} name="Cmd" component={Cmd}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
