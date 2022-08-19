import './ExpenseDate.css';

/* Configuração da data */
function ExpenseDate(propsExpense){
    const month = propsExpense.date.toLocaleString('en-US' , { month: 'long'});
    const day = propsExpense.date.toLocaleString('en-US', {day: '2-digit'});
    const year = propsExpense.date.getFullYear();

    return (<div className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__year'>{year}</div>
    <div className='expense-date__day'>{day}</div>
    </div>);
}

export default ExpenseDate;