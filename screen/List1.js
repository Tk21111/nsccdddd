import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

import { readFile } from '../fileManagement';

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
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('List')}>
              <Text style={styles.backButtonText}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton}>
              <Text style={styles.settingsButtonText}>{'⚙️'}</Text>
            </TouchableOpacity>
          </View>
          
          <Image 
            source={require("../assets/Screenshot 2024-07-14 141018.png")} 
            style={styles.image} 
          />
    
          <View style={styles.form}>
            <Text style={styles.label}>ชื่อ</Text>
            <Text style={styles.label}>{data? data.name: "loading"}</Text>
            <Text style={styles.label}>caloriy</Text>
            <Text style={styles.label}>{data? data.cal : "loading"}</Text>
            <Text style={styles.label}>วิธีการทำ</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingTop: 40,
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
      image: {
        width: 100,
        height: 100,
        marginVertical: 20,
      },
      form: {
        width: '80%',
      },
      label: {
        fontSize: 16,
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
