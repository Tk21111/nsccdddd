import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { createAndWriteFile, readFile, deleteFile, updateFile } from './../fileManagement';
import { useNavigation } from '@react-navigation/native';
import { randFood, rerand } from './../hook/rand';
import { setUser, updateUser } from './../hook/user';
import { foodListFilter, foodListUpdate } from './../hook/list';

const Cmd = () => {
  const navigation = useNavigation();
  const [userConfig, setUserConfig] = useState(null);

  useEffect(() => {
    let config;
    try {
      config = readFile('userConfigg.json');
    } catch {
      config = false;
    }

    if (config && config.username) {
      setUserConfig(config);
    } else {
      navigation.navigate('Createuser');
    }
  }, [userConfig]);

  console.log(userConfig);
  if (!userConfig) {
    return null; // or a loading indicator if preferred
  }

  return (
    <View>
      <Button title="Create full random / can be used with re-random all together" onPress={() => { randFood(); }} />
      <Button title="Re-random food" onPress={() => { rerand(); }} />
      <Button title="Read JSON File" onPress={() => { readFile('data.json'); }} />
      <Button title="Read user" onPress={() => { readFile('userConfigg.json'); }} />
      <Button title="Read food list" onPress={() => { readFile('food.json'); }} />
      <Button title="Set user" onPress={() => { setUser({ "username": "anme", "bmi": 20, "cal": 2000 }); }} />
      <Button title="Filter list" onPress={() => { foodListFilter('1.asdfsgd'); }} />
      <Button title="Delete JSON File" onPress={() => { deleteFile('data.json'); }} />
      <Text>Check console for logs</Text>
    </View>
  );
};

export default Cmd;
