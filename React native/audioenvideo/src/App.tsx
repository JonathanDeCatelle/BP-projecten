import {SafeAreaView, StyleSheet, Text} from 'react-native';

import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AudioEnVideo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
