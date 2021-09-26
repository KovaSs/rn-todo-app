import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onSubmit(todoTitle: string): void;
}

export const AddTodo = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    onSubmit(value.trim());
    setValue('');
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Input todo..."
      />
      <Button title="Add" onPress={pressHandler} disabled={!value.trim()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    padding: 10,
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});
