import React from 'react';
import { View, Button, Text } from 'react-native';
import { createAndWriteFile , readFile , deleteFile , updateFile } from './fileManagement';

const App = () => {
  /*
  const jsonFilePath = `${FileSystem.documentDirectory}data.json`;

  const createAndWriteFile = async () => {
    const data = { message: 'Hello, this is a JSON file!' };
    const content = JSON.stringify(data);

    try {
      await FileSystem.writeAsStringAsync(jsonFilePath, content);
      console.log('JSON file written successfully!');
    } catch (error) {
      console.error('Error writing JSON file:', error);
    }
  };

  const readFile = async () => {
    try {
      const content = await FileSystem.readAsStringAsync(jsonFilePath);
      const data = JSON.parse(content);
      console.log('JSON file content:', data);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }
  };

  const updateFile = async () => {
    const updatedData = { message: 'Updated content!' };
    const updatedContent = JSON.stringify(updatedData);

    try {
      await FileSystem.writeAsStringAsync(jsonFilePath, updatedContent);
      console.log('JSON file updated successfully!');
    } catch (error) {
      console.error('Error updating JSON file:', error);
    }
  };

  const deleteFile = async () => {
    try {
      await FileSystem.deleteAsync(jsonFilePath);
      console.log('JSON file deleted successfully!');
    } catch (error) {
      console.error('Error deleting JSON file:', error);
    }
  };
  */

  return (
    <View>
      <Button title="Create and Write JSON File" onPress={() => {createAndWriteFile('data.json')}} />
      <Button title="Read JSON File" onPress={() => {readFile('data.json')}} />
      <Button title="Update JSON File" onPress={() => {updateFile('data.json')}} />
      <Button title="Delete JSON File" onPress={() => {deleteFile('data.json')}} />
      <Text>Check console for logs</Text>
    </View>
  );
};

export default App;
