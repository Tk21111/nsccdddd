import React , {useState} from 'react';
import { View, Button, Text } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { randFood , rerand } from './../hook/rand';
import {setUser , updateUser} from './../hook/user';
import { foodListFilter , foodListUpdate } from './../hook/list';

const CreateUser = () => {

    const navigation = useNavigation();

    const [username , setUsername] = useState('');
    const [bmi , setBmi] = useState(20);

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });
    
    const onChangeUsername = (e) => setUsername(e);
    const onChangeBmi = (e) => setBmi(e);
    return (
        <SafeAreaView>
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeBmi}
                keyboardType='numeric'
                value={bmi}
            />

            <Button title="Set user" onPress={() => {setUser({"username" : username , "bmi" : bmi , "cal" : 2000 }); navigation.navigate("Home"); }} />
        </SafeAreaView>

        
          );
};

export default CreateUser;
