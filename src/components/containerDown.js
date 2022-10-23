import React, {useContext} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

import Context from '../Context/context';

function ContainerDown() {
  const {hour, min, sec, setHour, setMin, setSec} = useContext(Context);

  // const timer = () => {
  //   if (sec === 0) {
  //     if (min === 0) {
  //       setHour(hour - 1);
  //       setMin(60);
  //     }
  //     setMin(min - 1);
  //     setSec('60');
  //   }
  //   setSec(sec - 1);
  // };

  const action = () => {
    setInterval(() => {
      if (sec === '0') {
        if (hour === '0' && min === '0') {
          setSec('0');
          return;
        }
        if (hour === '0' && min !== '0') {
          setMin(`${min - 1}`);
          setSec('60');
          return;
        }
        if (hour !== '0' && min === '0') {
          setHour(`${hour - 1}`);
          setMin('59');
          setSec('60');
          return;
        }
        if (hour !== '0' && min !== '0') {
          setMin(`${min - 1}`);
          setSec('60');
          return;
        }
      }
      setSec(`${sec - 1}`);
    }, 1000);
  };

  return (
    <View style={styles.display}>
      <Pressable style={styles.btn} onPressOut={() => action()}>
        <Text style={styles.text}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 150,
  },
  btn: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#7000E0',
    marginLeft: 135,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContainerDown;

// const action = () => {
//   // setInterval(timer, 1000);
//   if (sec === '0') {
//     if (hour === '0' && min === '0') {
//       setSec('0');
//       return;
//     }
//     if (hour === '0' && min !== '0') {
//       setMin(`${min - 1}`);
//       setSec('60');
//       return;
//     }
//     if (hour !== '0' && min === '0') {
//       setHour(`${hour - 1}`);
//       setMin('59');
//       setSec('60');
//       return;
//     }
//     if (hour !== '0' && min !== '0') {
//       setMin(`${min - 1}`);
//       setSec('60');
//       return;
//     }
//   }
//   setSec(`${sec - 1}`);
// };