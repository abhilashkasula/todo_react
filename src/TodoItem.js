import React from 'react';

const TodoItem = ({id, text, status, onClick}) => {
  return (
    <div className="todo-item">
      <div className={`item-${status}`}></div>
      <label className={`item-text-${status}`} onClick={() => onClick(id)}>
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
