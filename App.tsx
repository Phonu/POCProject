/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {GroupDetails} from './src/GroupDetails';
import CustomPicker from './src/CustomPicker';
const App = () => {
  // const [schemaData, setSehema] = useState<Schema>();

  const [titles, setTitles] = useState([]);
  useEffect(() => {
    const schemaResponse = require('./src/GroupDetails.json') as GroupDetails;
    console.log('Schema Data', schemaResponse.response[0].forms[0].schema);

    let properties: any = schemaResponse.response[0].forms[0].schema.properties;
    let requiredData = schemaResponse.response[0].forms[0].schema.order;

    let requiredDataList: any = [];
    requiredData.map((val: any) => {
      if (properties[val]['enum']) {
        console.log('checking.... ', properties[val]['enum']);
        requiredDataList.push(properties[val]);
      }
    });
    setTitles(requiredDataList);
  }, []);

  // console.log('checking titles', titles);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 24}}>Group Details Demo</Text>
        </View>
        {titles.map((val: any) => (
          <CustomPicker titles={val} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;
