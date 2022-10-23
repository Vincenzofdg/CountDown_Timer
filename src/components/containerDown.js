import React, {useContext} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import Input from './elements/timeInput';

import Context from '../Context/context';

function ContainerDown() {
  const {hour, min, sec} = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Input value={hour} name="hours" />
        <Input value={min} name="minutes" />
        <Input value={sec} name="seconds" />
      </View>
      <Pressable style={styles.btn}>
        <Text>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  time: {
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#841584',
    marginLeft: 135,
  },
});

export default ContainerDown;
