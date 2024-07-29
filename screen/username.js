import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

import { updateUser } from '../hook/user';

const Username = () => {
    const navigation = useNavigation();

    const [userName , setUserName] = useState();
    const [value, setValue] = useState(1);

    /*
    if (readFile('userConfigg.json')){
        navigation.navigate("Home");
      };
    */
    return(
        <ImageBackground style={styles.backgroundImage}source={require('../assets/bg-username.png')}>
            <View>
                <Text style={styles.label}>{"User name"}</Text>
                <TextInput 
                style={styles.input} 
                placeholder="username" 
                value={userName}
                onChangeText={setUserName}
            />
                <Text style={styles.label2}>How Strict r u: {value} /10</Text>
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
                <TouchableOpacity style={styles.Button} onPress={() => {updateUser({"username": userName , "srict" : value}); navigation.navigate('Profile')}}>
                    <Text style={styles.calButtonText}> NEXT</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
    input: {
        alignSelf : 'center',
        backgroundColor: '#EAE7E3',
        fontWeight: '200',
        width: '70%',
        height: 60,
        textAlign: 'center',
        marginBottom: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    backButton: {
      padding: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    backIcon: {
      width: 24,
      height: 24,
    },
    label: {
        marginTop: '70%',
        marginLeft: '15%',
        marginBottom: '3%',
        textAlign: 'left',
        fontSize: 15,
        letterSpacing: .5,
        fontWeight: '500',
    },
    label2: {
        marginLeft: '15%',
        marginBottom: '3%',
        textAlign: 'left',
        fontSize: 15,
        letterSpacing: .5,
        fontWeight: 'bold'
    },
    label1: {
        marginTop: 10,
        textAlign: 'center',
        color: '#8E8E8E',
        fontSize: 16,
    },
    Button: {
      backgroundColor: '#000000',
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginHorizontal: '30%',
      marginTop: '10%',
      borderRadius: 40,
      alignItems : 'center'
    },
    calButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
    },
    slider: {
      width: 300,
      height: 40,
      alignSelf: 'center',
    },
  });

export default Username