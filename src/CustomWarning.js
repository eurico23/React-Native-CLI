import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomWarningProps = props => {
  // custom component with props to be used on another page file
  return (
    <Pressable
      onPress={props.onPressFunction} // name of the object that will contain the function on the props
      style={styles.warning_button}
      android_ripple={{color: '#fff'}}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
export default CustomWarningProps;