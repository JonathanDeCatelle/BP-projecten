import { Button, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import TrackPlayer from 'react-native-track-player';

const AudioPlayer = () => {

    const start = async () => {
        await TrackPlayer.setupPlayer()

        const track = {
            url: require('./assets/audio.mp3'),
            title: 'Title',
            artist: 'Artist',
            artwork: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tj_ksQ3H1Hawnj8A9Nm_lwHaHa%26pid%3DApi&f=1&ipt=aef286193c60a6e3092e5d361982b41ed689c971d55ef78e9467e1e7867e3ed6&ipo=images',
            duration: 100
        };

        await TrackPlayer.add(track);
    };
  
    useEffect(() => {
        start();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Play" onPress={async () => await TrackPlayer.play()} />
            <Button title="Pause" onPress={async () => await TrackPlayer.pause()} />
            <Button title="Stop" onPress={async () => await TrackPlayer.seekTo(0)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },
});

export default AudioPlayer;
