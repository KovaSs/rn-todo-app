
import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

interface Props {
  onSubmit(title: string): void;
}

export function AddTodo({onSubmit}: Props) {
  function pressHandler() {
    onSubmit('Add new Todos');
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3039ab',
  },
});
