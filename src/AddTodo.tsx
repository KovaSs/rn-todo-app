import { View, TextInput, Button, StyleSheet } from 'react-native'

interface Props {
  title?: string;
}

export const AddTodo = ({ title }: Props) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" onPress={() => null}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});
