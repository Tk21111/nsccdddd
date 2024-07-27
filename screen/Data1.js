import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Data1 = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionPress = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  const options = [
    { category: 'WITH MEAT', items: ['Traditional', 'KETO', 'Paleo'] },
    { category: 'WITHOUT MEAT', items: ['Vegetarian', 'Vegan', 'Keto Vegan'] },
    { category: 'WITHOUT ALLERGENS', items: ['Lactose Free', 'Gluten Free'] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of meal do you prefer?</Text>
      {options.map((optionGroup, index) => (
        <View key={index} style={styles.optionGroup}>
          <Text style={styles.optionGroupTitle}>{optionGroup.category}</Text>
          <View style={styles.optionsContainer}>
            {optionGroup.items.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  selectedOptions.includes(item) && styles.optionButtonSelected,
                ]}
                onPress={() => handleOptionPress(item)}
              >
                <Text
                  style={[
                    styles.optionButtonText,
                    selectedOptions.includes(item) && styles.optionButtonTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (selectedOptions.length > 0) {
            navigation.navigate('Home');
          } else {
            console.log('Please select at least one option');
          }
        }}
      >
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
  },
  optionGroup: {
    marginBottom: 30,
  },
  optionGroupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  optionButtonSelected: {
    backgroundColor: '#000',
  },
  optionButtonText: {
    color: '#000',
  },
  optionButtonTextSelected: {
    color: '#FFF',
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Data1;
