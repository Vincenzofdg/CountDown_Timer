import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

function Input({name, value}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.input}
        // onChangeText={}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {

  },
  input: {
    height: 45,
    width: 90,
    borderWidth: 1,
    padding: 15,
  },
  text: {

  }
});

export default Input;
