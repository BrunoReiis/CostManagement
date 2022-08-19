import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

/* Configuração dos item */
function ExpenseItem(propsExpense) {

  return (
    <div className="expense-item">
      <ExpenseDate date={propsExpense.date}/>
      <div className="expense-item__description">
        <h2>{propsExpense.title}</h2>
        <div className="expense-item__price">${propsExpense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
