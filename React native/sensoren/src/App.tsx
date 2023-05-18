/**
 * Sensoren applicatie
 * Bachelorproef Jonathan De Catelle 2022-2023
 *
 * @format
 */

import {SafeAreaView, StyleSheet, Text} from 'react-native';

import React from 'react';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sensoren</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
