import React, { useState , useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Provider as PaperProvider, Dialog, Portal, Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { useNavigation } from '@react-navigation/native';


import { cheeseDay } from '../hook/rand';
import { readFile } from '../fileManagement';
import HeaderR from './Header';

const CalendarScreen = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('6:00');
  const [selectedTime1, setSelectedTime1] = useState('12:15');
  const [selectedTime2, setSelectedTime2] = useState('18:00');
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0 });
  
  const [data , setData] = useState(['0','1','2']);

  useEffect(() => {
    getData();
  },[selectedDate]);

  const getData = async () => {
    if(selectedDate){
      try{
        let dataIn = await readFile('data.json');
        console.log(dataIn[selectedDate].food);
        dataIn = dataIn[selectedDate].food;
        setData(dataIn);
      } catch {
        Alert.alert('fail to pull data')
      }
      
    }
  }

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const onTimePress = () => {
    setVisible(true);
  };

  const onTimePress1 = () => {
    setVisible1(true);
  };

  const onTimePress2 = () => {
    setVisible2(true);
  };

  const onConfirm = ({ hours, minutes }) => {
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    setSelectedTime(formattedTime);
    setVisible(false);
  };
  const onDismiss = () => {
    setVisible(false);
  };

  const onConfirm1 = ({ hours, minutes }) => {
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    setSelectedTime1(formattedTime);
    setVisible1(false);
  };
  const onDismiss1 = () => {
    setVisible1(false);
  };

  const onConfirm2 = ({ hours, minutes }) => {
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    setSelectedTime2(formattedTime);
    setVisible2(false);
  };
  const onDismiss2 = () => {
    setVisible2(false);
  };

  return (
    <PaperProvider>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/bg-calendar.png')}>
        <HeaderR/>
        <View style={styles.container}>
          <ImageBackground style={styles.backgroundImage1} source={require('../assets/bg-calendar-prop.png')}>
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [selectedDate]: { selected: true, marked: true, selectedColor: 'black', textColor: 'white' },
              }}
              theme={{
                todayTextColor: 'black',
                textMonthFontWeight: 'bold',
                textMonthFontSize: 20,
                textDayHeaderFontWeight: '900',
                arrowColor: 'black',
                textDisabledColor: '#7D7D7D',
                textSectionTitleColor: 'black',
                dayTextColor: 'black',
                calendarBackground: 'tranparent',
              }}
              style={styles.calendar}
            />
          </ImageBackground>

          <View style={styles.selectedInfo}>
            
          </View>

          <View style={[styles.container3]}>
            <View style={styles.containment}>
              <View style={[styles.timePickerContainer, ,{borderRadius: 50,borderColor: 'black', borderWidth: 2,}]}>
                <TouchableOpacity style={styles.timeButton} onPress={() => navigation.navigate('List:note', { paramName: data[0]?.name })}>
                  <Text style={styles.timeButtonText}>{data[0]?.name?.substr(0,10) + ".." || 'N/A'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton} onPress={() => navigation.navigate('List:note', { paramName: data[1]?.name })} >
                  <Text style={styles.timeButtonText}>{data[1]?.name?.substr(0,10) + ".." || 'N/A'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton} onPress={() => navigation.navigate('List:note', { paramName: data[2]?.name })} >
                  <Text style={styles.timeButtonText}>{data[2]?.name?.substr(0,10) + ".." || 'N/A'}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.timeButton , {backgroundColor : "#DBFF00"}]}
                  onPress={() => selectedDate ? cheeseDay(selectedDate) : Alert.alert("fail to update to cheeseDay")}
                >
                  <Text style={styles.timeButtonText}>Cheese Day</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.timePickerContainer}>
              <TouchableOpacity style={styles.timeButton} onPress={onTimePress}>
                  <Text style={styles.timeButtonText}>B {selectedTime || 'N/A'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton} onPress={onTimePress1}>
                  <Text style={styles.timeButtonText}>L {selectedTime1 || 'N/A'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton} onPress={onTimePress2}>
                  <Text style={styles.timeButtonText}>D {selectedTime2 || 'N/A'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
              <Dialog.Content>
                <TimePickerModal
                  visible={visible}
                  onDismiss={onDismiss}
                  onConfirm={onConfirm}
                  hours={time.hours}
                  minutes={time.minutes}
                  label="Select Time"
                  cancelLabel="Cancel"
                  confirmLabel="OK"
                  animationType="fade"
                  
                />
              </Dialog.Content>
            </Dialog>
          </Portal>
          <Portal>
            <Dialog visible={visible1} onDismiss={onDismiss1}>
              <Dialog.Content>
                <TimePickerModal
                  visible={visible1}
                  onDismiss={onDismiss1}
                  onConfirm={onConfirm1}
                  hours={time.hours}
                  minutes={time.minutes}
                  label="Select Time"
                  cancelLabel="Cancel"
                  confirmLabel="OK"
                  animationType="fade"
                />
              </Dialog.Content>
            </Dialog>
          </Portal>
          <Portal>
            <Dialog visible={visible2} onDismiss={onDismiss2}>
              <Dialog.Content>
                <TimePickerModal
                  visible={visible2}
                  onDismiss={onDismiss2}
                  onConfirm={onConfirm2}
                  hours={time.hours}
                  minutes={time.minutes}
                  label="Select Time"
                  cancelLabel="Cancel"
                  confirmLabel="OK"
                  animationType="fade"
                />
              </Dialog.Content>
            </Dialog>
          </Portal>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  container3: {
    marginTop: 50,
    flexDirection: 'column'
  },
  containment: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImage1: {
    borderRadius: 20,
    resizeMode: 'cover',
    flex: 1,
  },
  timePickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
  timeButton: {
    backgroundColor: 'white',
    marginVertical: 5,
    paddingHorizontal: 30,
    padding: '5%',
    borderBlockColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  timeButtonText: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 12,
  },
  selectedInfo: {
    padding: 20,
    alignItems: 'center',
  },
});

export default CalendarScreen;
