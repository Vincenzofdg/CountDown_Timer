import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

function Input({ num, tag, setter }) {
  const ruleTag = t => {
    switch (t) {
      case 'h':
        return 25;
      case 'm':
        return 60;
      case 's':
        return 60;
      default:
        console.log('Error');
        break;
    }
  };

  const handleChange = p => {
    const rule = ruleTag(tag);
    const number = Number(p);

    if (number >= rule) {
      setter('');
      return;
    }
    p <= 0 && setter(0)

    setter(number);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="00"
        value={ num }
        maxLength={ 2 }
        onChangeText={ newValue => handleChange(newValue) }
      />
      <Text style={styles.span}>{tag}</Text>
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
