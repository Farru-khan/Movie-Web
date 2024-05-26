import React, { useState } from 'react'

const ExpenseTracker = () => {
  const [title, setTitle] = useState('')
  const [desp, setDesp] =useState('')
  const [amount, setAmount]= useState('')
  return (
    <>
    <h2>Expense</h2>
    <section className='content'>
      <div className='row'>
        <input type='text' value={title} onChange={e=>setTitle(e.target.value)} placeholder='expense-Title'/>
      </div>
      <div className='row' value={desp} onChange={e=>setDesp(e.target.value)}>
        <input type='text' placeholder='Expense-description'/>
      </div>
      <div className='row'>
        <input type='text' value={amount} onChange={e=>setAmount(e.target.value)} placeholder='Total-amount'/>
      </div>
      <div>
        <button className='track'>Add Expense</button>
      </div>
    </section>
    </>
  )
}

export default ExpenseTracker
