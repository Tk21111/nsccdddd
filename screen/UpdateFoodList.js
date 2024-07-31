import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { foodListUpdate } from '../hook/list';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import HeaderR from './Header';

const ListUpdate = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result)
      setImage(result.assets[0].uri);
    }
  };

  const onSave = async () => {
    setImage(image || "../assets/Screenshot 2024-07-14 141018.png");
    if (name && calories && instructions && image) {
      await foodListUpdate({
        name,
        cal: calories,
        howto: instructions,
        image,
      });
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderR/>
  
      <View style={styles.header} />

      <TouchableOpacity onPress={pickImage}>
        <Image
          source={image ? { uri: image } : require("../assets/Screenshot 2024-07-14 141018.png")}
          style={styles.image}
        />
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>ชื่อ</Text>
        <TextInput
          style={styles.input}
          placeholder="ชื่อ"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>cal</Text>
        <TextInput
          style={styles.input}
          placeholder="cal"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
        />

        <Text style={styles.label}>วิธีการทำ</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="วิธีการทำ"
          value={instructions}
          onChangeText={setInstructions}
          multiline
        />

        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  form: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
  },
  saveButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ListUpdate;
