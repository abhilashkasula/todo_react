import React from 'react';

const TodoItem = ({id, text, status, onClick}) => {
  return (
    <div className="todo-item">
      <div className={status === 'done' ? 'item-done' : 'item-undone'}></div>
      <label
        className={status === 'done' ? 'item-text-done' : null}
        onClick={() => onClick(id)}
      >
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
