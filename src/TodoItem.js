import React from 'react';

const TodoItem = ({id, text, status, onClick, onDelete}) => {
  console.log(status);
  return (
    <div className='todo-item'>
      <div onClick={() => onClick(id)}>
        <div className={`item-${status}`}></div>
        <label className={`item-text-${status}`}>{text}</label>
      </div>
      <div onClick={() => onDelete(id)}>X</div>
    </div>
  );
};

export default TodoItem;
