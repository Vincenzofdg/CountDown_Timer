import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import Context from '../Context/context';
import Input from './elements/timeInput';

function ContainerUp() {
  const {hour, min, sec, setHour, setMin, setSec} = useContext(Context);

  return (
    <View style={styles}>
      <Input num={hour} tag="h" setter={setHour} />
      <Input num={min} tag="m" setter={setMin} />
      <Input num={sec} tag="s" setter={setSec} />
    </View>
  );
}

const styles = StyleSheet.create({
  height: 250,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: 20,
  marginTop: 30,
});

export default ContainerUp;
