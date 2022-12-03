import React from 'react';
import {StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Sound from 'react-native-sound';
import Alarm from '../../sound/sound.wav';
import RNRestart from 'react-native-restart';

function Counter({total}) {
  const song = new Sound(Alarm);

  const action = () => {
    song.setVolume(1);
    song.play();
    setTimeout(() => RNRestart.Restart(), 4000);
  };

  // alert('Finished')
  return (
    <CountDown
      style={styles}
      size={45}
      until={total}
      onFinish={() => action()}
      digitStyle={{
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
      }}
      digitTxtStyle={{color: 'white', fontWeight: 'normal'}}
      timeToShow={['H', 'M', 'S']}
      timeLabels={{h: 'h', m: 'm', s: 's'}}
      timeLabelStyle={{color: 'white', fontWeight: 'normal'}}
    />
  );
}

const styles = StyleSheet.create({
  marginTop: 85,
  marginBottom: 40,
});

export default Counter;
