import React from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { PortalProvider, Portal } from '@gorhom/portal';

const Hoo = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <PortalProvider>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Portal>
          <View style={styles.buttonContainer}>
            <Button title="My Button" onPress={() => alert('Button Pressed!')} />
          </View>
        </Portal>
      </View>
    </PortalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  buttonContainer: {
    position: 'absolute',
    top: 30,
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    zIndex: 10,
    elevation: 10,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Hoo;
