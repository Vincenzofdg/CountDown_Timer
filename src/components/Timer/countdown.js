import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Context from '../../Context/context';

function Counter() {
  const { hour, min, sec } = useContext(Context);

  const numberDisplay = (number) => {
    if (!number) return '00';
    if ( number < 10 ) return `0${number}`;
    return number;
  };

  return (
    <View style={styles.display}>
      <View>
        <Text style={styles.number}>{ numberDisplay(hour) }</Text>
        <Text style={styles.span}>h</Text>
      </View>
      <View>
        <Text style={styles.number}>{ numberDisplay(min) }</Text>
        <Text style={styles.span}>m</Text>
      </View>
      <View>
        <Text style={styles.number}>{ numberDisplay(sec) }</Text>
        <Text style={styles.span}>s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display:{
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  number: {
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

export default Counter;
