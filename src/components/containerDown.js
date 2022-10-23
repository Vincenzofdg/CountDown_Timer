import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

function ContainerDown() {
  return (
    <View style={styles.display}>
      <Pressable style={styles.btn}>
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
