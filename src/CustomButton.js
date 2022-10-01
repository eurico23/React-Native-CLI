import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const MashButton = (props)=> { // custom component with props to be used on another page file
    return (
      <Pressable
        onPress={props.onPressFunction} // name of the object that will contain the function on the props
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    );
}


const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default MashButton