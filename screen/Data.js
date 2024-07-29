import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import { updateUser } from '../hook/user';
import { foodListFilter } from '../hook/list';
import { readFile } from '../fileManagement';

const DataInpu = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [religion, setReligion] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [data, setData] = useState({ name: 'Donut' });

  const items = [
    { name: 'Pizza', image: require('../assets/pr/pizza-pr.png') },
    { name: 'Donut', image: require('../assets/pr/donut-pr.png') },
    { name: 'Fries', image: require('../assets/pr/fries-pr.png') },
    { name: 'Lollipop', image: require('../assets/pr/lolipop-pr.png') }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataIn = await readFile('userConfigg.json');
        setData(dataIn);
        if (items.find(item => item.name === dataIn.pr)) {
          console.log(items.find(item => item.name === dataIn.pr));
        } else {
          console.log('Item not found in list');
        }
      } catch (error) {
        console.error('Failed to read file', error);
      }
    };

    fetchData();
  }, []);

  const handleNext = async () => {
    if (age && religion && height && weight) {
      try {
        console.log(religion)
        await foodListFilter(religion);
        await updateUser({ age, religion, bmi: (weight / (height ** 2)).toFixed(2) });
        navigation.navigate('Data1');
      } catch {
        console.log('Fetch failed');
      }
    } else {
      console.log('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {data.pr && items.find(item => item.name === data.pr) ? (
          <Image source={items.find(item => item.name === data.pr).image} style={styles.image} />
        ) : (
          <Text>No image available</Text>
        )}
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
        <View>
          <Picker
            mode='dropdown'
            selectedValue={religion}
            onValueChange={(itemValue) => setReligion(itemValue)}
          >
            <Picker.Item label="อิสลาม" value="pork" />
            <Picker.Item label="Hinduism" value="beef" />
            <Picker.Item label="อื่นๆ" value="" />
          </Picker>
        </View>
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
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
  },
  inputText: {
    alignItems: 'flex-start',
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
    marginBottom: 30,
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

export default DataInpu;
