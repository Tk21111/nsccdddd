import React, { useState, useEffect, useCallback } from 'react';
import { View, Button, Text } from 'react-native';
import { createAndWriteFile, readFile, deleteFile, updateFile } from './../fileManagement';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { randFood, rerand } from './../hook/rand';
import { setUser, updateUser } from './../hook/user';
import { foodListFilter, foodListUpdate } from './../hook/list';

const Cmd = () => {
  const navigation = useNavigation();
  const [userConfig, setUserConfig] = useState(null);

  const fetchUserConfig = async () => {
    let config;
    try {
      config = await readFile('userConfigg.json'); // Assuming readFile returns a promise
    } catch {
      config = false;
    }

    if (config && config.username) {
      setUserConfig(config);
    } else {
      navigation.navigate('Createuser');
    }
  };

  const checkDate = async () => {
    let dateobj = new Date();
    let dateOnly = dateobj.toISOString().split('T')[0];

    /*
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const utc7Time = new Date(utcTime + (7 * 3600000));
    */

    data = await readFile('data.json');

    console.log(data)
    if (!data[dateOnly]){
      await randFood();
      console.log('rerand')
    };
  }
  // Initial check when component mounts
  useEffect(() => {
    fetchUserConfig();
  }, [navigation]);

  // Re-check userConfig whenever the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      fetchUserConfig();
      checkDate();
    }, [navigation])
  );

  console.log(userConfig);
  if (!userConfig) {
    return null; // or a loading indicator if preferred
  }

  return (
    <View>
      <Button title="Create full random / can be used with re-random all together" onPress={() => { randFood(); }} />
      <Button title="Re-random food" onPress={() => { rerand(); }} />
      <Button title="Read JSON File" onPress={() => { readFile('data.json'); }} />
      <Button title="Auto run generate menu" onPress={() => { checkDate() }} />
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
