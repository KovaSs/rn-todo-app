import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { useApp } from './src/hooks'
import { TodoItem } from './src/TodoItem';

export default function App() {
  const { todos, addTodo } = useApp();

  const renderTodoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {renderTodoList}
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
