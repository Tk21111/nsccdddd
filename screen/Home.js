import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { readFile } from '../fileManagement';  // Ensure this path is correct
import { randFood, rerand } from '../hook/rand';  // Ensure this path is correct
import { FuncdateOnly } from '../data/dateOnly';
import Svg, { Path } from 'react-native-svg';
import { PortalProvider, Portal } from '@gorhom/portal';
import { Dialog } from 'react-native-paper';

import { ransadsf } from '../hook/rand';

const Home = () => {
  const navigation = useNavigation();
  const [userConfig, setUserConfig] = useState(null);
  const [data, setData] = useState(null);
  const [dialogVisible, setDialogVisible] = useState({ L: false, D: false, B: false });
  const [date, setDate] = useState(FuncdateOnly());

  const items = [
    { name: 'Pizza', image: require('../assets/pr/pizza-pr.png') },
    { name: 'Donut', image: require('../assets/pr/donut-pr.png') },
    { name: 'Fries', image: require('../assets/pr/fries-pr.png') },
    { name: 'Lollipop', image: require('../assets/pr/lolipop-pr.png')}
  ];


  const fetchUserConfig = async () => {
    try {
      const config = await readFile('userConfigg.json');
      if (config && config.username) {
        setUserConfig(config);
      } else {
        navigation.navigate('Createuser');
      }
    } catch {
      Alert.alert("Failed to pull userConfigg.json");
      navigation.navigate('Createuser');
    }
  };

  const fetchData = async () => {
    try {
      const data = await readFile('data.json');
      setData(data);
    } catch {
      Alert.alert("Failed to pull data.json");
    }
  };

  useEffect(() => {
    fetchData();
  }, [dialogVisible]);

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

  useEffect(() => {
    fetchUserConfig();
    checkDate();
  }, [dialogVisible]);

  const slice = () => {
    let slices = [
      { percent: 0.34, color: '#FED0EE' , C: 'B' },  // B
      { percent: 0.33, color: '#D0E8FF' , C: 'L'},  // L
      { percent: 0.33, color: '#FBE38E' , C: 'D'}   // D
    ];

    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);
      return [x, y];
    }

    return slices.map(slice => {
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        'L 0 0',
      ].join(' ');
      return <Path d={pathData} fill={slice.color} key={pathData} onPress={() => {showDialog(slice.C)}} />;
    });
  };

  const showDialog = (key) => {
    setDialogVisible(prevState => ({ ...prevState, [key]: true }));
  };

  const hideDialog = (key) => {
    setDialogVisible(prevState => ({ ...prevState, [key]: false }));
  };

  const foodItem = data?.[FuncdateOnly()]?.food || {};

  return (
    <ImageBackground source={require("../assets/bg-main.png")}>
    <PortalProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate('Noti')}>
            <Image style={styles.imageH} source={require('../assets/Noti.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.notificationButton, { marginLeft: 230 }]} onPress={() => navigation.navigate('Cmd')}>
            <Image
              source={ items[userConfig.pr].image} 
              style={[styles.imageH, { borderRadius: 12, borderWidth: 2, borderColor: 'black' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.notificationButton, { marginLeft: 30 }]} onPress={() => navigation.navigate('UserProfile')}>
            <Image style={styles.imageH} source={require('../assets/setting.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.cal, { borderRadius: 12, borderWidth: 2, borderColor: 'black', marginLeft: '75%', marginVertical: '2%' }]} onPress={() => navigation.navigate('Calory')}>
            <Text style={styles.calText}>... Cal</Text>
          </TouchableOpacity>
        </View>
        <Portal>
          <TouchableOpacity style={styles.saveButton} onPress={() => showDialog('L')}>
            <Text style={styles.saveButtonText}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton1} onPress={() => showDialog('D')}>
            <Text style={styles.saveButtonText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton2} onPress={() => showDialog('B')}>
            <Text style={styles.saveButtonText}>B</Text>
          </TouchableOpacity>
          <Dialog visible={dialogVisible.L} onDismiss={() => hideDialog('L')}>
            <Dialog.Content>
              <View style={styles.dialog}>
                <Image style={styles.imageS} source={foodItem[1]?.image ? { uri: foodItem[1].image } : require('../assets/Screenshot 2024-07-14 141018.png')} />
                <Text style={[{marginLeft: '7%' , paddingBottom: '4%'}]}>name : {foodItem[1]?.name || "no name L"} {"\n"}cal : {foodItem[1]?.cal || "XX"}</Text>
              </View>
              <View style={styles.bottomRow}>
                <TouchableOpacity style={[styles.cal, { borderRadius: 12, borderWidth: 2, borderColor: 'black', backgroundColor: '#FFEBB8', alignSelf: 'center',}]} onPress={() => navigation.navigate('List:note', { paramName: foodItem[1]?.name })}>
                  <Text style={styles.calText}>How to make</Text>
                </TouchableOpacity>
              </View>
            </Dialog.Content>
          </Dialog>
          <Dialog visible={dialogVisible.B} onDismiss={() => hideDialog('B')}>
            <Dialog.Content>
              <View style={styles.dialog}>
                <Image style={styles.imageS} source={foodItem[0]?.image ? { uri: foodItem[0].image } : require('../assets/Screenshot 2024-07-14 141018.png')} />
                <Text style={[{marginLeft: '7%' , paddingBottom: '4%'}]}>name : {foodItem[0]?.name || "no name L"} {"\n"}cal : {foodItem[0]?.cal || "XX"}</Text>
              </View>
              <View style={styles.bottomRow}>
                <TouchableOpacity style={[styles.cal, { borderRadius: 12, borderWidth: 2, borderColor: 'black', backgroundColor: '#FFEBB8', alignSelf: 'center',}]} onPress={() => navigation.navigate('List:note', { paramName: foodItem[1]?.name })}>
                  <Text style={styles.calText}>How to make</Text>
                </TouchableOpacity>
              </View>
            </Dialog.Content>
          </Dialog>
          <Dialog visible={dialogVisible.D} onDismiss={() => hideDialog('D')}>
            <Dialog.Content>
              <View style={styles.dialog}>
                <Image style={styles.imageS} source={foodItem[2]?.image ? { uri: foodItem[2].image } : require('../assets/Screenshot 2024-07-14 141018.png')} />
                <Text style={[{marginLeft: '7%' , paddingBottom: '4%'}]}>name : {foodItem[1]?.name || "no name L"} {"\n"}cal : {foodItem[2]?.cal || "XX"}</Text>
              </View>
              <View style={styles.bottomRow}>
                <TouchableOpacity style={[styles.cal, { borderRadius: 12, borderWidth: 2, borderColor: 'black', backgroundColor: '#FFEBB8', alignSelf: 'center',}]} onPress={() => navigation.navigate('List:note', { paramName: foodItem[1]?.name })}>
                  <Text style={styles.calText}>How to make</Text>
                </TouchableOpacity>
              </View>
            </Dialog.Content>
          </Dialog>
        </Portal>

        <View style={styles.centerImage}>
          <Svg
            height="200"
            width="200"
            viewBox="-1 -1 2 2"
            style={{ transform: [{ rotate: '-90deg' }] }}
          >
            {slice()}
          </Svg>
        </View>

        <Text style={styles.timerText}>{FuncdateOnly()}</Text>

        <View style={styles.bottomRow}>
          <TouchableOpacity onPress={() => navigation.navigate('List')}>
            <Image
              source={require('../assets/note.png')}
              style={styles.centerImage1}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Carlendar')}>
            <Image
              source={require('../assets/calendar.png')}
              style={styles.centerImage1}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={[styles.cal, { borderRadius: 12, borderWidth: 2, borderColor: 'black', backgroundColor: '#FFEBB8', alignSelf: 'center',}]} onPress={() => navigation.navigate('Calory')}>
            <Text style={styles.calText}>How to make</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={[styles.cal, { borderRadius: 12, borderWidth: 2, borderColor: 'black', backgroundColor: 'white', alignSelf: 'center', paddingVertical: 7, marginBottom: 20 }]} onPress={() => ransadsf()}>
            <Text style={[styles.calText, { fontSize: 24 }]}>RANDOM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PortalProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dialog: {
    flexDirection: 'row',
  },
  saveButton: {
    padding: 9,
    alignItems: 'center',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -30 }],
  },
  saveButton1: {
    padding: 9,
    alignItems: 'center',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -120 }],
  },
  saveButton2: {
    padding: 9,
    alignItems: 'center',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: [{ translateX: 25 }, { translateY: -120 }],
  },
  saveButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-start',
    width: 350,
    padding: 10,
  },
  notificationButton: {
    padding: 2,
    height: 20,
    width: 50,
  },
  imageH: {
    height: 40,
    width: 40,
    alignSelf: 'flex-start'
  },
  imageS: {
    height: 40,
    width: 40,
    alignSelf: 'flex-start'
  },
  cal: {
    textAlignVertical: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2FFDE'
  },
  calText: {
    fontSize: 16,
    textAlign: 'center',
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
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    height: 200,
  },
  centerImage1: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
  timerText: {
    marginTop: 5,
    fontSize: 32,
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
    marginVertical: 5,
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
