import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image , ScrollView, ImageBackground, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import { updateUser } from '../hook/user';
import { foodListFilter } from '../hook/list';
import { readFile } from '../fileManagement';

const DataInpu = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [religion, setReligion] = useState([]);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [male , setMale] = useState(false)

  const [data, setData] = useState({ name: 'Donut' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataIn = await readFile('userConfigg.json');
        setData(dataIn);
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
        await updateUser({ age, religion, male,  bmi: (weight / (height ** 2)).toFixed(2) });
        setAge('')
        setHeight(0);
        setWeight(0);
        setReligion([]);
        navigation.navigate('Data1');
      } catch {
        console.log('Fetch failed');
      }
    } else {
      Alert.alert("pls fill all fields")
    }
  };
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/data-page.png')}>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image source={typeof data.pr === "number"? data.pr : {uri : data.pr}} style={styles.image}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.buttonText}>{(male? "Male" : "Female")}</Text>
          <View style={styles.container1}>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#FFB2EE'}]} onPress={()=> setMale(false)}>
              <Text style={styles.buttonText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#8CEAFF'}]} onPress={()=>setMale(true)}>
              <Text style={styles.buttonText}>Male</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.inputText}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="numeric"
        />
        <Text style={styles.inputText}>วัตถุดิบที่รับประทานไม่ได้ {"\n" + religion}</Text>
        <View>
          <Picker
            mode='dropdown'
            selectedValue={religion}
            onValueChange={(itemValue) => setReligion([...religion , itemValue])}
          >
            <Picker.Item label="หมู" value="pork" />
            <Picker.Item label="เนื้อ(วัว)" value="beef" />
            <Picker.Item label="ไก่" value="chicken" />
          </Picker>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#FFEBB8' , width: 100 , height: 35 ,alignSelf: 'flex-end'}]} onPress={()=>setReligion([])}>
              <Text style={[styles.buttonText , {alignSelf: 'center'}]}>clear</Text>
            </TouchableOpacity>
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
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
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
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: "3%",
    paddingVertical: 10,
    
  },
  button: {
    borderRadius: 25,
    marginHorizontal: '5%',
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1%'
  },
});

export default DataInpu;
