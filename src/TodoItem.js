import React from 'react';
import Hoverable from './Hoverable';

const TodoItem = ({id, text, status, onClick}) => {
  return (
    <section className='todo-item' onClick={() => onClick(id)}>
      <div className={`item-${status}`}></div>
      <label className={`item-text-${status}`}>{text}</label>
    </section>
  );
};

export default Hoverable(TodoItem);
