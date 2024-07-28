import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image , ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import { updateUser } from '../hook/user';
import { foodListFilter } from '../hook/list';
const UserForm = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [religion, setReligion] = useState();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const a = () => {
    try{
      foodListFilter(religion.value);
      updateUser({ age: age, religion: religion, bmi: (weight / (height ** 2)).toFixed(2) });
    } catch {
      console.log('fetch fail')
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/pr/donut-pr.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="numeric"
        />
        <Text style={styles.inputText}>ศาสนา(รับประทาน)</Text>
        <RNPickerSelect
          onValueChange={(value) => setReligion(value)}
          items={[
            { label: 'คริสต์', value: ''},
            { label: 'อิสลาม', value: 'pork' },
            { label: 'Hinduism', value: 'beef' },
            { label: 'พุทธ', value: '' },
          ]}
          style={{
            inputIOS: styles.picker,
            inputAndroid: styles.picker,
          }}
          placeholder={{
            label: 'Religion',
            value: null,
          }}
        />
        <Text style={styles.inputText}>Height</Text>        
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholder="Height (m)"
          keyboardType="numeric"
        />
        <Text style={styles.inputText}>Weight</Text>       
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight (Kg)"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => {
    if (age && religion && height && weight) {
      
      a();
      navigation.navigate('Data1');
    } else {
      console.log('Please fill all fields');
    }
  }}>
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
    top: 10,
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
  },inputText : {
    alignItems: 'flex-start'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    marginBottom : 30 ,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
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