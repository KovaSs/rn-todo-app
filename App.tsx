import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { useApp } from './src/hooks'
import { TodoItem } from './src/TodoItem';

export default function App() {
  const { todos, addTodo } = useApp();

  function renderTodoList({item}) {
    return <TodoItem key={item.id} todo={item} />
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={renderTodoList}
        />
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
