import React, {useContext} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

import Context from '../Context/context';

function ContainerDown() {
  const {hour, min, sec, setTotal} = useContext(Context);

  const action = () => {
    const hourToSec = Number(hour) * 60 * 60;
    const minToSec = Number(min) * 60;
    const secToSec = Number(sec);
    setTotal({
      value: hourToSec + minToSec + secToSec,
      display: true,
    });
  };

  return (
    <View style={styles.display}>
      <Pressable style={styles.btn} onPress={() => action()}>
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
