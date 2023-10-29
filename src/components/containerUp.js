import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import Context from '../Context/context';
import Input from './Timer/input';
import Counter from './Timer/countdown';

function ContainerUp() {
  const {start, timer, setTimer} = useContext(Context);

  return (
    <>
    {start ? (
        <Counter />
      ) : (
        <View style={styles}>
          {
            [...Object.keys(timer)].map((e) => (
              <Input key={e} kind={e} value={timer[e]} setter={setTimer} />
            ))
          }
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
