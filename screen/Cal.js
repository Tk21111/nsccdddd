import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { readFile } from '../fileManagement';
import { updateLike , updateUnLike } from '../hook/list';
import { setEx , setEat } from '../hook/rand';

const Cal = () => {
    const [cal, setCal] = useState();
    const navigation = useNavigation();

    const onSave = async () => {
        if (cal) {
            await setEx(cal);
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>🍍</Text>
                </View>
                <TouchableOpacity style={styles.settingsButton}>
                    <Text style={styles.settingsButtonText}>⚙️</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.circle}>
                <Text style={styles.circleText}>{cal} Cal Burn</Text>
            </View>
            <TextInput 
                style={styles.input} 
                placeholder="calories" 
                value={cal}
                onChangeText={setCal}
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.button} onPress={onSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDF5E6',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FDF5E6',
    },
    backButton: {
        padding: 10,
    },
    backButtonText: {
        fontSize: 24,
    },
    avatarContainer: {
        padding: 10,
        backgroundColor: '#FDF5E6',
        borderRadius: 20,
    },
    avatarText: {
        fontSize: 24,
    },
    settingsButton: {
        padding: 10,
    },
    settingsButtonText: {
        fontSize: 24,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#FFA07A',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    circleText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Cal;
