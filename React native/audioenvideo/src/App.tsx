import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AudioPlayer from './Audio';
import React from 'react';
import VideoPlayer from './Video';

const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);


  const pauseVideo = () => {
    
  };

  const stopVideo = () => {
    
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Audio en videospeler</Text>
      <View style={styles.audioContainer}>
        <AudioPlayer/>
      </View>
      <View style={styles.videoContainer}>
        {isPlaying && <VideoPlayer/>}
      </View>
      <View style={styles.buttonContainer}>
          <Button title="Play" onPress={() => setIsPlaying(!isPlaying)} />
          <Button title="Pause" onPress={pauseVideo} />
          <Button title="Stop" onPress={stopVideo} />
      </View>
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
  audioContainer: {
    marginVertical: 10,
    width: '100%',
    height: 50,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: "row",
  },
  videoContainer: {
    marginVertical: 10,
    width: '100%',
    height: 300,
  },
});

export default App;
