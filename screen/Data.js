import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserForm = () => {
  const navigation = useNavigation();

  const [Age, setAge] = useState()
  const [Religion, setReligion] = useState()
  const [Height, setHeight] = useState()
  const [Weight, setWeight] = useState()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/pr/donut-pr.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={Age} onChange={setAge} keyboardType={'numeric'} placeholder="Age" />
        <TextInput style={styles.input} value={Religion} onChange={setReligion} placeholder="Religion" />
        <TextInput style={styles.input} value={Height} onChange={setHeight} keyboardType={'numeric'}  placeholder="Height" />
        <TextInput style={styles.input} value={Weight} onChange={setWeight} keyboardType={'numeric'} placeholder="Weight" />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default UserForm;
