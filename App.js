import React from 'react';
import { View, Button, Text } from 'react-native';
import { createAndWriteFile , readFile , deleteFile , updateFile } from './fileManagement';
import { randFood , rerand } from './hook/rand';
import {setUser , updateUser} from './hook/user';
import { foodListFilter , foodListUpdate } from './hook/list';

const App = () => {

  return (
    <View>     
      <Button title="creat full random / can be use with re-random alltogether" onPress={() => {randFood()}} />
      <Button title="rerandom food" onPress={() => {rerand()}} />
      <Button title="Read JSON File" onPress={() => {readFile('data.json')}} />
      <Button title="readuser" onPress={() => {readFile('userConfig.json')}} />
      <Button title="readfoodlist" onPress={() => {readFile('food.json')}} />
      <Button title="Set user" onPress={() => {setUser({"username" : "anme" , "bmi" : 20 , "cal" : 2000 })}} />
      <Button title="filter list " onPress={() => {foodListFilter('1.asdfsgd')}} />
      <Button title="Delete JSON File" onPress={() => {deleteFile('data.json')}} />
      <Text>Check console for logs</Text>
    </View>
  );
};

export default App;
