import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const ExpenseInput = props => {
  // use state for input field
  const [enteredExpense, setEnteredExpense] = useState('');

  // Update state for input value from input field
  const expenseInputHandler = (enteredValue) => {
    let newText = '';
    let numbers = '0123456789';
    for (var i = 0; i < enteredValue.length; i++) {
      if (numbers.indexOf(enteredValue[i]) > -1) {
        newText = newText + enteredValue[i];
      }
      else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    setEnteredExpense(newText);
  };

  const addExpenseHandler = () => {
    props.onAddExpense(enteredExpense);
    setEnteredExpense('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New expense"
          keyboardType='numeric'
          style={styles.inputField}
          onChangeText={expenseInputHandler}
          value={enteredExpense}
          maxLenghth={10} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" style={styles.button} onPress={addExpenseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    borderBottomColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '80%'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '60%'
  },
  button:{
    width: "40%"
  }
});

export default ExpenseInput;