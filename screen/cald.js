import React, { useState , useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Provider as PaperProvider, Dialog, Portal, Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

import { cheeseDay } from '../hook/rand';
import { readFile } from '../fileManagement';

const CalendarScreen = () => {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTime1, setSelectedTime1] = useState('');
  const [selectedTime2, setSelectedTime2] = useState('');
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
      <ImageBackground style={styles.backgroundImage} source={require('../assets/calender.png')}>
        <View style={styles.container}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: 'black', textColor: 'white' },
            }}
            theme={{
              todayTextColor: 'black',
              textMonthFontWeight: 'bold',
              arrowColor: 'black',
              textInactiveColor: '',
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
            }}
            style={styles.calendar}
          />

          <View style={styles.selectedInfo}>
            <Text>Data : {data[0]?.name || 'select date'}</Text>
            <Text>Data : {data[1]?.name || 'select date'}</Text>
            <Text>Data : {data[2]?.name || 'select date'}</Text>
          </View>

          <View style={styles.container3}>
            <View style={styles.containment}>
              <View style={styles.timePickerContainer}>
                <TouchableOpacity style={styles.timeButton} onPress={onTimePress}>
                  <Text style={styles.timeButtonText}>{selectedTime || 'select time'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton} onPress={onTimePress1}>
                  <Text style={styles.timeButtonText}>{selectedTime1 || 'select time'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton} onPress={onTimePress2}>
                  <Text style={styles.timeButtonText}>{selectedTime2 || 'select time'}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.timePickerContainer}>
                <TouchableOpacity
                  style={styles.timeButton}
                  onPress={() => selectedDate ? cheeseDay(selectedDate) : Alert.alert("fail to update to cheeseDay")}
                >
                  <Text style={styles.timeButtonText}>Cheese Day</Text>
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
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 2,
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
  timePickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 5,
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
  timeButton: {
    marginVertical: 10,
    paddingHorizontal: 40,
    padding: '5%',
    borderBlockColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  timeButtonText: {
    alignSelf: 'center',
    fontSize: 12,
  },
  selectedInfo: {
    padding: 20,
    alignItems: 'center',
  },
});

export default CalendarScreen;
