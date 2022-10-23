import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

function Input({num, tag, setter}) {
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
    if (p >= rule) {
      setter('0');
      return;
    }

    setter(p);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num}
        maxLength={2}
        onPressIn={() => setter()}
        onChangeText={newValue => handleChange(newValue)}
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
