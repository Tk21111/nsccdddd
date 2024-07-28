import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { readFile } from '../fileManagement'; // Ensure this is correctly imported
import { foodListFilter } from '../hook/list';
import Slider from '@react-native-community/slider';

const UserProfile = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [preferredIngredients, setPreferredIngredients] = useState('');
  const [ingredientsToAvoid, setIngredientsToAvoid] = useState('');
  const [chronicDiseases, setChronicDiseases] = useState('');
  const [value ,setValue] = useState(item?.strict || 5);

  const [get, setGet] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await readFile('userConfigg.json');
        console.log(list)
        setItem(list);
        setGet(true);
      } catch (error) {
        console.error('Error reading the list:', error);
      }
    };
    if (!get) {
      getList();
    }
  }, [get]);

  const calculateBmi = () => {
    if (height && weight) {
      const calculatedBmi = (parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2);
      setBmi(calculatedBmi);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={item.pr} 
          style={styles.avatar} 
        />
        <View style={styles.header1}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.username}>{item?.name || "username"}</Text>
            <View style={styles.genderIconContainer}>
              <Text>♂️</Text>
              <TouchableOpacity onPress={() => {/* Add logic to change gender icon */}}>
                <Text>✏️</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerTextContainer}>
            <View style={styles.row}>
              <Text>bmi: {item ? item.bmi : ''}</Text>
              <Text>Age: {item ? item.age : ''}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.row1}>
        <Text>ศาสนา </Text>
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
        </View>
        <View style={styles.row1}>
          <Text>Chronic Diseases: </Text>
          <TextInput
            style={styles.input}
            value={chronicDiseases}
            onChangeText={setChronicDiseases}
            placeholder="Chronic Diseases"
          />
        </View>
        <Text>How Strict r u: {value} /10</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={1}
                  maximumValue={10}
                  step={1}
                  value={value}
                  onValueChange={(val) => setValue(val)}
                  minimumTrackTintColor="#1fb28a"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="#b9e4c9"
                />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={() => {
        foodListFilter(ingredientsToAvoid);
      }}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  slider: {
    width: 300,
    height: 40,
    alignSelf: 'center',
  },
  picker: {
    height: 35,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 90,
    marginBottom : 30 ,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header1: {
    flexDirection: 'column',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerTextContainer: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  genderIconContainer: {
    flexDirection: 'row',
    marginLeft: 40,
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginLeft: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#FFF',
  },
  saveButton: {
    backgroundColor: '#008080',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default UserProfile;
