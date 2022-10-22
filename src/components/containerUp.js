import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Context from '../Context/context';

function ContainerUp() {
  const {hour, min, sec} = useContext(Context);

  return (
    <View style={styles.display}>
      <Text style={styles.timer}>{hour.value + hour.display}</Text>
      <Text style={styles.timer}>{min.value + min.display}</Text>
      <Text style={styles.timer}>{sec.value + sec.display}</Text>
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
  },
  timer: {
    fontSize: 45,
  },
});

export default ContainerUp;
