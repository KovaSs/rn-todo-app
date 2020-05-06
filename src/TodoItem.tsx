
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  todo: {
    id: string;
    title: string;
  };
}

export function TodoItem({ todo }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom :10,
  },
});
