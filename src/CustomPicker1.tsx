import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CustomPicker1 = () => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a language:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => setSelectedValue(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C#" value="csharp" />
      </Picker>
      <Text style={styles.selected}>Selected: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 20,
  },
  selected: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomPicker1;
