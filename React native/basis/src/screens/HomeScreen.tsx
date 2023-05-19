import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default HomeScreen;
