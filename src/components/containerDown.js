import React, {useContext} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import Sound from 'react-native-sound';

import Context from '../Context/context';
import Alarm from '../sound/sound.wav';

function ContainerDown() {
  const { hour, min, sec, setSec, setMin, setHour, setStart } = useContext(Context);
  const SECOND = 1000;
  const song = new Sound(Alarm);
  let firstMin = 0;

  const handleOnPress = () => {
    const hourToSec = hour * 60 * 60 || 0;
    const minToSec = min * 60 || 0;
    const secToSec = sec || 0;
    
    setStart(true)

    const timer = setInterval(() => {
      // console.log(hour + ':' + min + ':' + sec)

      // if (sec === 0) {
      //     if (min === 0) {
      //       setHour(prev => prev - 1);
      //       setMin(60);
      //     }
      //     setMin(prev => prev - 1);
      //     setSec(60);
      //   }
      
      setSec(prevSec => {
        if (prevSec > 0) return prevSec - 1;
        if (prevSec === 0)  {
          setMin(prevMin => {
            firstMin += 1
            console.log(firstMin)
            if (firstMin === 1) return;
            return prevMin - 1
          })
          return 60
        };
        return; 
      });
    }, SECOND)

    setTimeout(() => {
      clearInterval(timer);
      song.setVolume(1);
      song.play();
      setHour(0)
      setMin(0)
      setSec(0)
      setStart(false)
    }, (((hourToSec + minToSec + secToSec) * 1000) + SECOND));
  };

  return (
    <View style={styles.display}>
      <Pressable
        disabled={ !hour && !min && !sec }
        style={styles.btn} 
        onPress={() => handleOnPress()}
      >
        <Text style={styles.text}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  btn: {
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
