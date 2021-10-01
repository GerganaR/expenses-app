import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//component is js function wich returns code
//create component -> export component -> import component
//html -> must only have 1 return element(div)
//properties - props
//only getting 1 parameter per component - props

const ExpenseItem = (props) => {
  //call only in component functions
  //always return array with 2 values - value and method to change the value

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
