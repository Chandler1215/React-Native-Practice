import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import ExpenseInput from './components/ExpenseInput';
import ExpenseItem from './components/ExpenseItem';

export default function App() {
  // use state for total inputed values
  const [totalExpenses, setTotalExpenses] = useState([]);
  // use state for add mode/not add mode
  const[isAddMode, setIsAddMode] = useState(false);

  // Method used for add button action
  const addExpenseHandler = enteredExpense => {
    if(enteredExpense.length === 0){
      alert("input is empty");
      return;
    }
    setTotalExpenses(currentExpenses => [...currentExpenses, { id: Math.random().toString(), expenseValue: enteredExpense }]);
    setIsAddMode(false);
  };

  // Method used for remove action (when user taps an expense)
  const removeExpenseHandler = expenseId => {
    setTotalExpenses(currentExpenses => {
      return currentExpenses.filter(expense => expense.id !== expenseId);
    });
  };

  // Method used to cancel add action
  const cancelExpenseAddtionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new expense" onPress={() => setIsAddMode(true)}></Button>
      <ExpenseInput visible={isAddMode} onAddExpense={addExpenseHandler} onCancel={cancelExpenseAddtionHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={totalExpenses}
        renderItem={itemData => (
          <ExpenseItem
            id={itemData.item.id}
            onDelete={removeExpenseHandler}
            expenseValue={itemData.item.expenseValue} />)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
