import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar, AddTodo } from './src';

export default function App() {
  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo />
        <Text>Hello react native!</Text>
        <StatusBar style="auto" />
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
