/**
 * Notificaties applicatie
 * Bachelorproef Jonathan De Catelle 2022-2023
 *
 * @format
 */

import {SafeAreaView, StyleSheet, Text} from 'react-native';

import React from 'react';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Notificaties</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
