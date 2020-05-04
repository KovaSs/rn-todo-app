import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { useApp } from './src/hooks'

export default function App() {
  const {addTodo} = useApp();

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
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
