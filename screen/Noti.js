import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { setEx, setEat } from '../hook/rand';
import { readFile } from '../fileManagement';
import { FuncdateOnly } from '../data/dateOnly';
const Noti = () => {
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
    <ImageBackground source={require('../assets/bg-noti.png')} style={styles.backgroundImage} ></ImageBackground>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
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

export default Noti;
