import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = (props) => {
  const items = props.items.map(({id, text, status}) => (
    <TodoItem
      id={id}
      text={text}
      status={status}
      key={id}
      onUpdate={props.onUpdate}
      onDelete={props.onDelete}
    />
  ));

  return <div>{items}</div>;
};

export default TodoItems;
