import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar, AddTodo, Todo } from './src';

interface TodoItem {
  id: string;
  title: string;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todoTitle: string) => {
    setTodos((prevTodos) => [...prevTodos, {
      id: Date.now().toString(),
      title: todoTitle,
    }])
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </View>
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
