import React from 'react';
import {StyleSheet, View} from 'react-native';

import ContainerUp from './components/containerUp';
import ContainerDown from './components/containerDown';

function Page() {
  return (
    <View style={styles}>
      <ContainerUp />
      <ContainerDown />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundColor: 'black',
  flex: 1,
  flexDirection: 'column',
  alignContent: 'space-between',
});

export default Page;
