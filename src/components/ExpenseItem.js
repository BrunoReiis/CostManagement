import './ExpenseItem.css';

function ExpenseItem(propsExpense) {
    const month = propsExpense.date.toLocaleString('en-US' , { month: 'long'});
    const day = propsExpense.date.toLocaleString('en-US', {day: '2-digit'});
    const year = propsExpense.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{propsExpense.title}</h2>
        <div className="expense-item__price">${propsExpense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
