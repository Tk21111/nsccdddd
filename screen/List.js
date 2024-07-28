import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput , ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { readFile } from '../fileManagement';
import { updateLike, updateUnLike } from '../hook/list';

const List = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [get, setGet] = useState(false);
  const [searchText, setSearchText] = useState('');

  const color = ['#CEC2FF','#F89F9F','#CAD4DB','#F8DF9F','#FFE459','#B1F89F']

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await readFile('food.json');
        const key = Object.keys(list);

        let tempItems = [];
        for (let l of key) {
          tempItems = tempItems.concat(list[l]);
        }
        setItems(tempItems);
        setGet(true);
      } catch (error) {
        console.error('Error reading the list:', error);
      }
    };
    if (!get) {
      getList();
    }
  }, [items, get]);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground source={require('../assets/bg-List1.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <ScrollView contentContainerStyle={styles.itemList}>
        {filteredItems.map((item, index) => (
          <View key={index} style={[styles.item, {backgroundColor : color[index]}]}>
            <Image source={require('../assets/Screenshot 2024-07-14 141018.png')} style={styles.itemImage} />
            <TouchableOpacity style={styles.itemDetails} onPress={() => navigation.navigate('List:note', { paramName: item.name })}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCalories}>CAL : {item.cal}</Text>
              <Text>{item.like ? '👍' : '👎'}</Text>
            </TouchableOpacity>
            {/*<Text onPress={() => { updateLike(item.name); setGet(false); }}> 👍 </Text>*/}
            {/*<Text onPress={() => { updateUnLike(item.name); setGet(false); }}> 👎 </Text>*/}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('ListUpdate')}>
        <Text style={styles.saveButtonText}>+</Text>
      </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#CAD4DB',
    width: '45%',
    height: '30%',
    marginTop: 10,
    borderRadius: 25,
    opacity: .7,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
  },

  itemImage: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    width: '90%',
    height: 115,
    marginBottom: 10,
  },
  itemDetails: {
    justifyContent: 'left',
    alignItems: 'left',
  },
  itemName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black'
  },
  itemCalories: {
    fontSize: 13,
    color: '#3E3E3E',
    fontWeight : 'bold',
    textAlign: 'left',
  },
  saveButton: {
    backgroundColor: '#FF6347',
    padding: 9,
    borderRadius: 50,
    alignItems: 'center',
    height: 50,
    width: 50,
    marginVertical: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default List;
