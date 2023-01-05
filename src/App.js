import React from 'react';
import {StyleSheet, View} from 'react-native';
import Provider from './Context/provider';

import ContainerUp from './components/containerUp';
import ContainerDown from './components/containerDown';

function App() {
  return (
    <Provider>
      <View style={styles}>
        <ContainerUp />
        <ContainerDown />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundColor: 'black',
  flex: 1,
  flexDirection: 'column',
  alignContent: 'space-between',
});

export default App;
