import React from 'react';

const TodoItem = ({id, text, status, onClick, onDelete}) => {
  return (
    <div className='todo-item'>
      <div className='todo-content' onClick={() => onClick(id)}>
        <div className={`item-${status}`}></div>
        <label className={`item-text-${status}`}>{text}</label>
      </div>
      <div className='delete' onClick={() => onDelete(id) }>X</div>
    </div>
  );
};

export default TodoItem;
