
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native';

interface Props {
  onSubmit(title: string): void;
}

export function AddTodo({onSubmit}: Props) {
  const [todoItemValue, setTodoItemValue] = useState<string>('');

  function pressHandler() {
    if (todoItemValue.trim()) {
      onSubmit(todoItemValue);
      setTodoItemValue('');
    } else {
      Alert.alert('Новое дело не должно быть пустым');
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        value={todoItemValue}
        onChangeText={setTodoItemValue}
        style={styles.input} 
        placeholder="Введите название дела..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3039ab',
  },
});
