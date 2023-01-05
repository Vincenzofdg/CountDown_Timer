import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import Context from '../Context/context';
import Input from './Timer/input';
import Counter from './Timer/countdown';

function ContainerUp() {
  const context = useContext(Context);

  return (
    <>
    {context.start ? (
        <Counter />
      ) : (
        <View style={styles}>
          <Input num={context.hour} tag="h" setter={context.setHour} />
          <Input num={context.min} tag="m" setter={context.setMin} />
          <Input num={context.sec} tag="s" setter={context.setSec} />
        </View>
      )}
    </>
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
