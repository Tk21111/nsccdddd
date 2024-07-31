import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderR = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.container}
        >
            <Text style={styles.text}>{" <"}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        marginTop: '10%',
        marginLeft: '5%',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default HeaderR;
