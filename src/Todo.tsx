import { View, Text, StyleSheet } from 'react-native'

interface Props {
  todo: {
    id: string;
    title: string;
  }
}

export const Todo = ({ todo }: Props) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
