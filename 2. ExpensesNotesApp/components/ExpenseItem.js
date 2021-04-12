import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ExpenseItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
    <View style={styles.listItem}>
      <Text>{props.expenseValue + ' $'}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
export default ExpenseItem;