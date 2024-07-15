import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { updateUser } from '../hook/user';

const Data = () => {
    const navigation = useNavigation();

    const [userName , setUserName] = useState();
    /*
    if (readFile('userConfigg.json')){
        navigation.navigate("Home");
      };
    */
    return(
        <ImageBackground style={styles.backgroundImage}source={require('../assets/data-page.png')}>
            <View>
                <Text style={styles.label}>{"Username"}</Text>
                <TextInput 
                style={styles.input} 
                placeholder="    username" 
                value={userName}
                onChangeText={setUserName}
            />
                <TouchableOpacity style={styles.Button} onPress={() => {updateUser({"ProfilePic": userName}); navigation.navigate('Data')}}>
                    <Text style={styles.calButtonText}> NEXT</Text>
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
    input: {
        alignSelf : 'center',
        backgroundColor: '#EAE7E3',
        width: '70%',
        height: 60,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: 'center', // Center content vertically
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
    },
  });

export default Data