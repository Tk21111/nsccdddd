import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { setUser } from '../hook/user';
import { readFile } from '../fileManagement';
import HeaderR from './Header';
const Start = () => {
    const navigation = useNavigation();
    
    return(
        <ImageBackground style={styles.backgroundImage}source={require('../assets/start-page.png')}>
            <HeaderR/>
            <View>
                <Text style={styles.label}> {"FOOD Nutrition" + "\n"  + "Calculater App"}</Text>
                <Text style={styles.label1}> {"we guarantee your good" + "\n"  + "heath and well-being"}</Text>
                <TouchableOpacity style={styles.Button} onPress={() => {
                  if(!readFile('userConfigg.json')){
                    navigation.navigate('Home');
                  } else {
                    setUser({});
                    navigation.navigate('Username');
                  }
                  
                  }}>
                    <Text style={styles.calButtonText}> LET'S GET Start</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    backIcon: {
      width: 24,
      height: 24,
    },
    label: {
        marginTop: '110%',
        textAlign: 'center',
        fontSize: 24,
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
      marginHorizontal: '20%',
      marginTop: '10%',
      borderRadius: 40,
      alignItems : 'center'
    },
    calButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });

export default Start