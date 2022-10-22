import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './elements/timeInput';

import Context from '../Context/context';

function ContainerDown() {
  const {hour, min, sec} = useContext(Context);

  return (
    <View style={styles.time}>
      {/* <Input value={hour.value} name={hour.display} />
      <Input value={min.value} name={min.display} />
      <Input value={sec.value} name={sec.display} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    backgroundColor: 'green',
    height: 250,
    // flex: 1,
    // flexDirection: 'row',
    // alignContent: 'space-between',
  },
});

export default ContainerDown;
