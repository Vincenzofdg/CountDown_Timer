import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

function Input({value, name}) {
  return (
    <>
      <TextInput style={styles} value={value} placeholder={name} />
    </>
  );
}

const styles = StyleSheet.create({
  height: 45,
  width: 85,
  marginTop: 60,
  borderWidth: 1,
  borderColor: 'white',
  padding: 12,
});

export default Input;
