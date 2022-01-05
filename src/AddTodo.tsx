import { View, TextInput, Button, StyleSheet } from 'react-native'

interface Props {
  onSubmit(todoTitle: string): void;
}

export const AddTodo = ({ onSubmit }: Props) => {

  const pressHandler = () => {
    // onSubmit();
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" onPress={pressHandler}/>
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
