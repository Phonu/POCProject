import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomPicker = ({titles}: {titles: any}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Python', value: 'Python'},
    {label: 'Java', value: 'Java'},
    {label: 'C#', value: 'C'},
  ]);

  const [tempItems, setTempItems] = useState([]);

  console.log('CustomPicker Page', titles);
  console.log('CustomPicker Page enummm', titles?.['enum']);

  useEffect(() => {
    let data = [];
    if (titles['enum']) {
      titles['enum'].map(val => {
        data.push({label: val, value: val});
      });
    }
    if (data.length) {
      setTempItems(data);
    }
    console.log('dataaaa', data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{titles['title']}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={tempItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Pick an option"
        style={styles.dropdown}
      />
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
  dropdown: {
    marginBottom: 20,
    borderColor: '#666',
  },
  selected: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomPicker;
