import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { foodListUpdate } from '../hook/list';
import { useNavigation } from '@react-navigation/native';

const ListUpdate = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState();
  const [instructions, setInstructions] = useState('');

  const navigation = useNavigation();

  const onSave = async () => {
    if (name && calories && instructions){
        await foodListUpdate({"name" : name , "cal" : calories , "howto" : instructions});
        navigation.navigate('Home');
    }
    
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>{'⚙️'}</Text>
        </TouchableOpacity>
      </View>
      
      <Image 
        source={require("../assets/Screenshot 2024-07-14 141018.png")} 
        style={styles.image} 
      />

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
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
  settingsButton: {
    padding: 10,
  },
  settingsButtonText: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
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
  scoreText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default ListUpdate;
