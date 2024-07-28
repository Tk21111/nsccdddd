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

  console.log(itemPr);

  const handleSave =  () => {
    try {
      updateUser({ "pr": itemPr });
      navigation.navigate('Data');
    } catch (error) {
      Alert.alert("Error", "Failed to update user profile");
      console.error(error);
    }
  };

  return (
    <ImageBackground source={require('../assets/bg-List1.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={itemPr} style={styles.displayedImage} />
        <Text style={styles.saveButtonText}>Yours Profile</Text>
      </View>
      <View style={styles.container1}>
        <ImageBackground source={require('../assets/blur.png')} style={styles.blurImg}>
          <ScrollView contentContainerStyle={styles.itemList}>
            {items.map((item, index) => (
              <View key={index} style={styles.item}>
                <TouchableOpacity 
                  style={styles.conIm} 
                  onPress={() => {
                    setItem(item.image); 
                    updateUser({ "pr": item.image }).catch(error => {
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
            <Text style={styles.saveButtonText}>SAVE</Text>
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
    marginVertical: '50%',
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
    width: '100%',
    height: '100%'
  },
  displayedImage: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
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
    backgroundColor: 'white',
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
    width: '90%',
    height: 115,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 9,
    borderRadius: 50,
    alignItems: 'center',
    height: 50,
    width: 100,
    marginVertical: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Profile;
