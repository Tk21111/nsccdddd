import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { readFile } from '../fileManagement'; // Ensure this is correctly imported

const UserProfile = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [preferredIngredients, setPreferredIngredients] = useState('');
  const [ingredientsToAvoid, setIngredientsToAvoid] = useState('');
  const [chronicDiseases, setChronicDiseases] = useState('');

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
          source={require('../assets/pr/donut-pr.png')} 
          style={styles.avatar} 
        />
        <View style={styles.header1}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.username}>Username</Text>
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
          <Text>Preferred Ingredients: </Text>
          <TextInput
            style={styles.input}
            value={preferredIngredients}
            onChangeText={setPreferredIngredients}
            placeholder="Preferred Ingredients"
          />
        </View>
        <View style={styles.row1}>
          <Text>Ingredients to Avoid: </Text>
          <TextInput
            style={styles.input}
            value={ingredientsToAvoid}
            onChangeText={setIngredientsToAvoid}
            placeholder="Ingredients to Avoid"
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
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={() => {
        // Add save logic here
        console.log('Save button pressed');
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header1: {
    flexDirection: 'column',
    alignItems: 'center',
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
  },
  genderIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
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
