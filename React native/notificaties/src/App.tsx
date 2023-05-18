import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

import { createNotification } from './notifications/create';
import { notificationsSetup } from './notifications/setup';
import perf from '@react-native-firebase/perf';

const App = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const sendNotification = async (title: string, body: string) => {
    const trace = await perf().startTrace('createNotification');
    await createNotification(title, body);
    await trace.stop();
    setTitle('');
    setBody('');
  };

  useEffect(() => {
    notificationsSetup();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notificatie aanmaken</Text>
      <TextInput 
        placeholder="Title" 
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={styles.textInput}
        />
      <TextInput 
        placeholder="Body" 
        onChangeText={(text) => setBody(text)}
        value={body}
        style={styles.textInput}
        />
      <Button
        title="Verstuur notificatie"
        onPress={() => sendNotification(title, body)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput:{
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default App;
