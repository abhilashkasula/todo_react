import React, {useContext} from 'react';
import TodoContext from './TodoContext';
import useHover from './useHover';

const TodoItem = ({id, text, status}) => {
  const [ref, isHovered] = useHover();
  const {dispatch} = useContext(TodoContext);

  const update = () => dispatch({type: 'UPDATE_STATUS', id});
  const deleteItem = () => dispatch({type: 'DELETE_ITEM', id});

  return (
    <div className='hover-container' ref={ref}>
      <section className='todo-item' onClick={update}>
        <div className={`item-${status}`}></div>
        <label className={`item-text-${status}`}>{text}</label>
      </section>
      <div onClick={deleteItem}>{isHovered ? 'X' : ''}</div>
    </div>
  );
};

export default TodoItem;
