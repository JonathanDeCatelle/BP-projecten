import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SensorTypes, accelerometer, gyroscope, setUpdateIntervalForType } from 'react-native-sensors';

import perf from '@react-native-firebase/perf';

setUpdateIntervalForType(SensorTypes.accelerometer, 10);
setUpdateIntervalForType(SensorTypes.gyroscope, 10);

const App = () => {
  const [accelerometerData, setAccelerometerData] = useState({});
  const [gyroscopeData, setGyroscopeData] = useState({});
  
  const accelerometerTrace = perf().newTrace('accelerometer3333');
  const gyroscopeTrace = perf().newTrace('gyroscope3333');
  
  const handleAccelerometerData = ({ x, y, z, timestamp }) => {
    accelerometerTrace.start();
    setAccelerometerData({ x, y, z, timestamp });
    accelerometerTrace.stop();
  };
  
  const handleGyroscopeData = ({ x, y, z, timestamp }) => {
    gyroscopeTrace.start();
    setGyroscopeData({ x, y, z, timestamp });
    gyroscopeTrace.stop();
  };
  
  useEffect(() => {
    const accelerometerSubscription = accelerometer.subscribe(handleAccelerometerData);
    
    return () => {
      accelerometerSubscription.unsubscribe();
      accelerometerTrace.stop(); // Stop de trace wanneer de component wordt gedemonteerd
    };
  }, []);
  
  useEffect(() => {
    const gyroscopeSubscription = gyroscope.subscribe(handleGyroscopeData);
    
    return () => {
      gyroscopeSubscription.unsubscribe();
      gyroscopeTrace.stop(); // Stop de trace wanneer de component wordt gedemonteerd
    };
  }, []);
  
  const getAccelerometerData = () => {
    // Implementeer hier de gewenste logica voor het ophalen van accelerometergegevens
  };
  
  const getGyroscopeData = () => {
    // Implementeer hier de gewenste logica voor het ophalen van gyroscoopgegevens
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Data sensoren opvragen</Text>
      <View style={styles.dataContainer}>
        <Text>Accelerometer data:</Text>
        <Text>{JSON.stringify(accelerometerData)}</Text>
      </View>
      <Button title="Accelerometer" onPress={getAccelerometerData} />
      <View style={styles.dataContainer}>
        <Text>Gyroscoop data:</Text>
        <Text>{JSON.stringify(gyroscopeData)}</Text>
      </View>
      <Button title="Gyroscoop" onPress={getGyroscopeData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default App;
