import {View,  TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const addTodo = ({submitHandler}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };
  return (
  <View>
  <TextInput
  style={styles.input}
  placeholder="Add a todo"
  onChangeText={changeHandler}
  value={text} />
  <Button color="coral" onPress={() => submitHandler(text)} title="add todo" />

  </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default addTodo;
