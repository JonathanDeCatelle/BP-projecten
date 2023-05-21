import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

import React from 'react';
import Video from 'react-native-video';

const VideoPlayer = () => {
  const playVideo = () => {
  
  };

  const pauseVideo = () => {
    
  };

  const stopVideo = () => {
    
  };

  //https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4

  return (
    <SafeAreaView style={styles.container}>    
      <Video source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={styles.backgroundVideo}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
