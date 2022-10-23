import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Context from '../Context/context';

function ContainerUp() {
  const {hour, min, sec} = useContext(Context);

  return (
    <View style={styles.display}>
      <Text style={styles.timer}>{hour + 'h'}</Text>
      <Text style={styles.timer}>{min + 'm'}</Text>
      <Text style={styles.timer}>{sec + 's'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  timer: {
    fontSize: 45,
  },
});

export default ContainerUp;
