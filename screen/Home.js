import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { readFile } from '../fileManagement';  // Ensure this path is correct
import { randFood } from '../hook/rand';  // Ensure this path is correct

const Home = () => {
  const navigation = useNavigation();
  const [userConfig, setUserConfig] = useState(null);

  const fetchUserConfig = async () => {
    try {
      const config = await readFile('userConfigg.json'); // Assuming readFile returns a promise
      if (config && config.username) {
        setUserConfig(config);
      } else {
        navigation.navigate('Createuser');
      }
    } catch {
      navigation.navigate('Createuser');
    }
  };

  const checkDate = async () => {
    const dateObj = new Date();
    const dateOnly = dateObj.toISOString().split('T')[0];

    try {
      const data = await readFile('data.json');
      if (!data[dateOnly]) {
        await randFood();
        console.log('rerand');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Initial check when component mounts
  useEffect(() => {
    fetchUserConfig();
    checkDate();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate('Cmd')}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/Screenshot 2024-07-14 141018.png')} 
          style={styles.carrotImage} 
        />
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.calButton} onPress={() => navigation.navigate('Calory')}>
        <Text style={styles.calText}>... Cal</Text>
      </TouchableOpacity>
      <View style={styles.pieChart}>
        <Text style={styles.pieText}>D</Text>
        <Text style={styles.pieText}>B</Text>
        <Text style={styles.pieText}>L</Text>
      </View>
      <Image 
        source={{ uri: 'https://path-to-your-image.png' }} 
        style={styles.centerImage} 
      />
      <Text style={styles.timerText}>07:59</Text>
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.howToMakeButton} onPress={() => navigation.navigate('HowToMake')}>
          <Text style={styles.howToMakeText}>How To Make</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Incal')}>
          <Text style={styles.menuText}>emotional damage</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.listButton} onPress={() => navigation.navigate('List')}>
          <Text style={styles.listText}>LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendarButton} onPress={() => navigation.navigate('Calendar')}>
          <Text style={styles.calendarText}>CALENDAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.randomButton} onPress={() => navigation.navigate('Random')}>
        <Text style={styles.randomText}>RANDOM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    padding: 10,
  },
  notificationButton: {
    padding: 10,
  },
  notificationText: {
    fontSize: 24,
  },
  carrotImage: {
    width: 50,
    height: 50,
  },
  settingsButton: {
    padding: 10,
  },
  settingsText: {
    fontSize: 24,
  },
  calButton: {
    position: 'absolute',
    top: 80,
    right: 10,
    backgroundColor: '#FFDDC1',
    padding: 10,
    borderRadius: 5,
  },
  calText: {
    fontSize: 16,
  },
  pieChart: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  pieText: {
    fontSize: 24,
  },
  centerImage: {
    width: 100,
    height: 100,
  },
  timerText: {
    fontSize: 32,
    marginVertical: 10,
  },
  howToMakeButton: {
    backgroundColor: '#FFDDC1',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  howToMakeText: {
    fontSize: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  listButton: {
    backgroundColor: '#FFDDC1',
    padding: 10,
    borderRadius: 5,
  },
  listText: {
    fontSize: 16,
  },
  menuButton: {
    backgroundColor: '#FFDDC1',
    padding: 10,
    borderRadius: 5,
  },
  menuText: {
    fontSize: 16,
  },
  calendarButton: {
    backgroundColor: '#FFDDC1',
    padding: 10,
    borderRadius: 5,
  },
  calendarText: {
    fontSize: 16,
  },
  randomButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  randomText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Home;
