import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { readFile } from '../fileManagement';
import HeaderR from './Header';

const List1 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { paramName } = route.params || '';

    const [data, setData] = useState(null); // Initialize with null or appropriate initial value

    useEffect(() => {
        const getFood = async () => {
            try {
                const d = await readFile('food.json');
                return d;
            } catch (error) {
                console.error('Error reading file:', error);
                return null;
            }
        };

        if (!data) {
            getFood().then((food) => {
                console.log(food); // Ensure data is fetched correctly
                if (food) {
                    for (let l of Object.keys(food)) {
                        for (let f of food[l]) {
                            console.log(f);
                            if (f.name !== "" && f.name === paramName) {
                                setData(f);
                                return; // Exit loop once data is found
                            }
                        }
                    }
                }
            });
        }
    }, [data, paramName]);


    return (
        <ImageBackground source={require('../assets/bg-List1.png')} style={styles.backgroundImage}>
            <HeaderR/>
            <View style={styles.container}>
              <View style={styles.header}>
              <View style={styles.iconWrapper}>
              <Image source={require('../assets/Screenshot 2024-07-14 141018.png')} style={styles.carrotIcon} />
              <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                  <Image source={require('../assets/setting.png')} style={styles.settingsIcon} />
              </TouchableOpacity>
              </View>
            </View>
                
                <Image 
                    source={data?.image ? { uri: data.image } :  require("../assets/Screenshot 2024-07-14 141018.png")} 
                    style={styles.image} 
                />
                <Text style={styles.labelName}>{data ? data.name: "loading"}</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>calories</Text>
                    <Text style={styles.label1}>{data ? "-  " + data.cal + "\n" : "loading"}</Text>
                    <Text style={styles.label}>วิธีทำ</Text>
                    <Text style={styles.label1}>{data?.howto || "None"}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    backButton: {
        padding: 10,
    },
    backButtonText: {
        fontSize: 18,
    },
    settingsButton: {
        padding: 10,
    },
    settingsButtonText: {
        fontSize: 18,
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
    image: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    form: {
        width: '90%',
        alignItems: "left"
    },
    labelName: {
        fontSize: 24,
        fontWeight : '600',
        alignItems : 'center',
        color : '#FF0000',
        marginBottom: 5,
    },
    label: {
        fontSize: 18,
        fontWeight : '500',
        alignItems : 'center',
        marginBottom: 5,
    },
    label1: {
        fontSize: 16,
        alignItems : 'center',
        color : '#6A6A6A',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    textArea: {
        height: 100,
    },
    saveButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    scoreText: {
        marginTop: 20,
        fontSize: 18,
    },
});

export default List1;
