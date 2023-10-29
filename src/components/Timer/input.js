import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

function Input({ kind, value, setter }) {
  const handleChange = (i) => {
    if (Number(i) >= 60 && kind !== 'hour') {
      setter(prev => ({
        ...prev,
        [kind]: 0
      }))

      return
    }

    setter(prev => ({
      ...prev,
      [kind]: Number(i)
    }))
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder='00'
        value={ value === 0 ? '' : value.toString() }
        maxLength={ kind !== 'hour' ? 2 : 3 }
        onChangeText={handleChange}
      />
      <Text style={styles.span}>{kind[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    width: 100,
    height: 75,
  },
  span: {
    color: 'white',
  },
});

export default Input;
