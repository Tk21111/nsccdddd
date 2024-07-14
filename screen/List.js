import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { readFile } from '../fileManagement';
import { updateLike , updateUnLike } from '../hook/list';
const List = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [get , setGet] = useState();

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
        setGet(true)
      } catch (error) {
        console.error("Error reading the list:", error);
      }
    };
    if(!get){
      getList();
    }
    
  }, [items , get]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.itemList}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={require('../assets/Screenshot 2024-07-14 141018.png')} style={styles.itemImage} />
            <View style={styles.itemDetails} onTouchEndCapture={() => navigation.navigate('List:note', { paramName: item.name })}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCalories}>แคลอรี่ : {item.cal}</Text>
              <Text style={styles.itemDescription}>{item.ingredent}</Text>
              <Text>{item.like ? '👍' : '👎'}</Text>


            </View>
            <Text onPress={() => {updateLike(item.name); setGet(false);}}> 👍 </Text>
            <Text onPress={() => {updateUnLike(item.name); setGet(false);}}> 👎 </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('ListUpdate')}>
        <Text style={styles.saveButtonText}>Add food in list</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16645F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  itemList: {
    width: '115%',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF5E1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCalories: {
    fontSize: 14,
  },
  itemDescription: {
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default List;
