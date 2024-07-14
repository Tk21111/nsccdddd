import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
        <Image 
          source={{uri: 'https://path-to-your-image.png'}} 
          style={styles.carrotImage} 
        />
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.calButton}>
        <Text style={styles.calText}>... Cal</Text>
      </TouchableOpacity>
      <View style={styles.pieChart}>
        <Text style={styles.pieText}>D</Text>
        <Text style={styles.pieText}>B</Text>
        <Text style={styles.pieText}>L</Text>
      </View>
      <Image 
        source={{uri: 'https://path-to-your-image.png'}} 
        style={styles.centerImage} 
      />
      <Text style={styles.timerText}>07:59</Text>
      <TouchableOpacity style={styles.howToMakeButton}>
        <Text style={styles.howToMakeText}>How To Make</Text>
      </TouchableOpacity>
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.listButton} onPress={() => {navigation.navigate('List')}}>
          <Text style={styles.listText}>LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>MENU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendarButton}>
          <Text style={styles.calendarText}>CALENDAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.randomButton}>
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
    width: '100%',
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
  },
  pieText: {
    fontSize: 24,
  },
  centerImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 200,
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
    marginVertical: 20,
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
