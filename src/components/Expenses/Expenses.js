import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
 
/* Classe para o codigo ficar limpo */
/* Organização dos atributos */
const Expenses = (propsExpense) => {
 
    return (
        <Card className='expenses'>
        <ExpenseItem
        title={propsExpense.items[0].title}
        amount={propsExpense.items[0].amount}
        date={propsExpense.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={propsExpense.items[1].title}
        amount={propsExpense.items[1].amount}
        date={propsExpense.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={propsExpense.items[2].title}
        amount={propsExpense.items[2].amount}
        date={propsExpense.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={propsExpense.items[3].title}
        amount={propsExpense.items[3].amount}
        date={propsExpense.items[3].date}
      ></ExpenseItem>
      </Card>
    );
    
};
 
export default Expenses;