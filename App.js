import React from 'react';
import { View, Button, Text } from 'react-native';
import { createAndWriteFile , readFile , deleteFile , updateFile } from './fileManagement';
import { randFood , rerand } from './hook/rand';
import {setUser , updateUser} from './hook/user';

const App = () => {
  
  x = {"test" : "test"}
  return (
    <View>
      <Button title="Create and Write JSON File" onPress={() => {createAndWriteFile('data.json',x)}} />
      <Button title="creat full random / can be use with re-random alltogether" onPress={() => {randFood()}} />
      <Button title="rerandom food" onPress={() => {rerand()}} />
      <Button title="Read JSON File" onPress={() => {readFile('data.json')}} />
      <Button title="Update JSON File" onPress={() => {updateFile('data.json')}} />
      <Button title="Delete JSON File" onPress={() => {deleteFile('data.json')}} />
      <Text>Check console for logs</Text>
    </View>
  );
};

export default App;
