import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { updateUser } from '../hook/user';

const Profile = () => {
  const navigation = useNavigation();
  const [itemPr, setItem] = useState(require('../assets/pr/pizza-pr.png'));

  const items = [
    { name: 'Pizza', image: require('../assets/pr/pizza-pr.png') },
    { name: 'Donut', image: require('../assets/pr/donut-pr.png') },
    { name: 'Fries', image: require('../assets/pr/fries-pr.png') },
    { name: 'Lollipop', image: require('../assets/pr/lolipop-pr.png') }
  ];

  const handleSave = async () => {
    try {
      // Ensure the user update logic is awaited if it's async
      await updateUser({ 'pr': itemPr.name });
    } catch (error) {
      Alert.alert("Error", "Failed to update user profile");
      console.error(error);
    }
    try {
      // Ensure the user update logic is awaited if it's async
      navigation.navigate('Datain');
    } catch (error) {
      Alert.alert("Error", "Failed to navigate");
      console.error(error);
    }
    
  };

  return (
    <ImageBackground source={require('../assets/bg-pr.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={itemPr.image} style={styles.displayedImage} />

      </View>
      <View style={styles.container1}>
        <ImageBackground source={require('../assets/blur.png')} style={styles.blurImg}>
          <ScrollView contentContainerStyle={styles.itemList}>
            {items.map((item, index) => (
              <View key={index} style={styles.item}>
                <TouchableOpacity 
                  style={styles.conIm} 
                  onPress={() => {
                    setItem(item); 
                    updateUser({ pr: itemPr.name }).catch(error => {
                      Alert.alert("Error", "Failed to update user profile");
                      console.error(error);
                    });
                  }}>
                  <Image source={item.image} style={styles.itemImage} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </ImageBackground>
        <View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  container1: {
    marginVertical: '60%',
    alignItems: 'center',
    padding: 20,
  },
  conIm: {
    marginLeft: '10%',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  blurImg: {
    width: 80*4,
    height: 80*4,
    borderRadius:40*4,
  },
  displayedImage: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    width: 240,
    height: 240,
    backgroundColor: 'white',
    resizeMode: 'contain',
    marginBottom: 40,
  },
  itemList: {
    opacity: .9,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    paddingTop: 10,
    padding: 4,
    width: '30%',
    height: 150,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 30,
    backgroundColor: 'white',
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 50,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    fontSize: 8, 
    height: 50,
    width: 100,
    marginVertical: 10,
  },
  saveButtonText: {
    color: 'white',
    paddingVertical: '5%', 
    fontSize: 13
    ,
  },
});

export default Profile;
