import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image , ImageBackground} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { readFile } from '../fileManagement';
import { foodListFilter } from '../hook/list';
import Slider from '@react-native-community/slider';

const UserProfile = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [preferredIngredients, setPreferredIngredients] = useState('');
  const [ingredientsToAvoid, setIngredientsToAvoid] = useState('');
  const [chronicDiseases, setChronicDiseases] = useState('');
  const [value, setValue] = useState(5);

  const [item, setItem] = useState(null);
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
        console.log(dataIn)
        const matchedItem = items.find(item => item.name === dataIn.pr);
        if (matchedItem) {
          setItem(matchedItem);
        } else {
          console.log('Item not found in list');
        }
      } catch (error) {
        console.error('Failed to read file', error);
      }
    };

    fetchData();
  }, []);

  const calculateBmi = () => {
    if (height && weight) {
      const calculatedBmi = (parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2);
      setBmi(calculatedBmi);
    }
  };

  return (
    <ImageBackground style={styles.backgroundImage}source={require('../assets/bg-profile.png')}>
      <View style={styles.container}>
        <View style={styles.header}>
          {item && item.image ? (
            <Image source={item.image} style={styles.avatar} />
          ) : (
            <Text>No image available</Text>
          )}
          <View style={styles.header1}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>{data?.username || "username"}</Text>
              <View style={styles.genderIconContainer}>
                <Text>♂️</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Datain')}}>
                  <Text>✏️</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerTextContainer}>
              <View style={styles.row}>
                <Text>bmi: {data.bmi || "no data"}</Text>
                <Text>Age: {data.age || "no data"}</Text>
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
          <Text>How Strict are you: {value} /10</Text>
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
          navigation.navigate("Home");
        }}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
  slider: {
    width: 300,
    marginTop : 20,
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
    marginBottom: 30,
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
