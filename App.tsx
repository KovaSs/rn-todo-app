import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar, AddTodo } from './src';

interface TodoItem {
  id: string;
  title: string;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todoTitle: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now().toString(), title: todoTitle }])
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <Text>Hello react native!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
