import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

import countDown from '../hook/countDown';

import Context from '../Context/context';
import Alarm from '../sound/sound.wav';

function ContainerDown() {
  const { timer, setTimer } = useContext(Context);
  const song = new Sound(Alarm);

  const playAlarm = () => {
    song.setVolume(1);
    song.play();
  }

  const handlePress = () => {
    const hours = timer.hour * 60 * 60;
    const minutes = timer.minute * 60;
    const seconds = timer.second;
    const total = hours + minutes + seconds;

    countDown(total, setTimer, playAlarm)
  }

  return (
      <TouchableOpacity
        style={styles.container} 
        onPress={handlePress}
      >
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 125,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#7000E0',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContainerDown;
