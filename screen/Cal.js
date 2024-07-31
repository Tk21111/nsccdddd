import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { setEx, setEat } from '../hook/rand';
import { readFile } from '../fileManagement';
import { FuncdateOnly } from '../data/dateOnly';

import HeaderR from './Header';
const Cal = () => {
  const [cal, setCal] = useState();
  const [Incal , setInCal] = useState();
  const navigation = useNavigation();
  const [load , setLoad] = useState(false);

  useEffect(() => {
    const read = async () => {
      const dateOnly = FuncdateOnly();
      let data = await readFile('data.json');
    
      setInCal(!Incal ? data[dateOnly].eaten ||  0 : Incal)
      setCal(!cal ? data[dateOnly].exercise ||  0  : cal)
      
      setLoad(true)
    };
    read();
  }, [load])

  const onSave = async () => {
    if (cal) {
      await setEx(cal);
      navigation.navigate('Home');
    }
  };
  const onSave1 = async () => {
    if (Incal) {
      await setEat(Incal);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderR/>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
            <Image source={require('../assets/Screenshot 2024-07-14 141018.png')} style={styles.carrotIcon} />
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                <Image source={require('../assets/setting.png')} style={styles.settingsIcon} />
            </TouchableOpacity>
          
        </View>
      </View>
      <ScrollView>
        <View style={styles.calorieContainer}>
          <ImageBackground source={require('../assets/Variant3.png')} style={styles.percentageCircleBurn}>
            <Text style={styles.percentageTextBlack}>{Incal}</Text>
          </ImageBackground>
          <TextInput 
                style={styles.input} 
                placeholder="calories" 
                value={Incal}
                onChangeText={setInCal}
                keyboardType='numeric'
            />
          <TouchableOpacity style={styles.calButton} onPress={onSave1}>
            <Text style={styles.calButtonText}>.... Cal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calorieContainer}>
          <ImageBackground source={require('../assets/Variant4.png')} style={styles.percentageCircleBurn}>
            <Text style={styles.percentageText}>{cal}</Text>
          </ImageBackground>
          <TextInput 
                style={styles.input} 
                placeholder="calories" 
                value={cal}
                onChangeText={setCal}
                keyboardType='numeric'
            />
          <TouchableOpacity style={styles.calButton} onPress={onSave}>
            <Text style={styles.calButtonText}>.... Cal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  iconWrapper: {
    flexDirection: 'row',
    marginLeft: '75%',
    alignItems: 'center',
  },
  input: {
    textAlign : 'center',
    width: 80,
    height: 40,
    marginBottom: 10
  },
  carrotIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  settingsButton: {
    padding: 10,
  },
  settingsIcon: {
    width: 24,
    height: 24,
  },
  calorieContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  percentageCircleBurn: {
    width: 200,
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  percentageTextBlack: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
  calorieText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
  },
  calButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  calButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Cal;
