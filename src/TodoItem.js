import React from 'react';
import useHover from './useHover';

const TodoItem = ({id, text, status, onClick, onDelete}) => {
  const [ref, isHovered] = useHover();
  
  return (
    <div className='hover-container' ref={ref}>
      <section className='todo-item' onClick={() => onClick(id)}>
        <div className={`item-${status}`}></div>
        <label className={`item-text-${status}`}>{text}</label>
      </section>
      <div onClick={() => onDelete(id)}>{isHovered ? 'X' : ''}</div>
    </div>
  );
};

export default TodoItem;
