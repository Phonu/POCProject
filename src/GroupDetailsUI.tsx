import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GroupDetails} from './GroupDetails';

export const GroupDetailsUI = () => {
  // const [data, setData] = useState([]);

  useEffect(() => {
    const response = require('./GroupDetails.json') as GroupDetails;
    console.log('response.status', response.status);
    // let properties = response.response[0].forms[0].schema.properties;
    // const requiredFields = response.response[0].forms[0].schema.required;
    // requiredFields.map((val: any) => {
    //   console.log(val);
    // });

    // console.log(properties.ackda);
  }, []);

  console.log('helloooo');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Network Proxy 770</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
  listTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'blue',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  detail: {
    fontSize: 24,
    marginVertical: 5,
    color: '#333',
  },
});
