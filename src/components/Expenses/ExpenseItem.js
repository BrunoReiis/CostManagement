import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

/* Configuração dos item */
const ExpenseItem = (propsExpense) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={propsExpense.date}/>
      <div className="expense-item__description">
        <h2>{propsExpense.title}</h2>
        <div className="expense-item__price">${propsExpense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
