import React, {useReducer} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import Input from './Input';
import {todoReducer, initialState} from './todoReducer';
import './todo.css';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const updateTitle = (text) => dispatch({type: 'UPDATE_TITLE', text});
  const reset = () => dispatch({type: 'RESET'});
  const updateItem = (id) => dispatch({type: 'UPDATE_STATUS', id});
  const deleteItem = (id) => dispatch({type: 'DELETE_ITEM', id});
  const addItem = (text) => dispatch({type: 'ADD_ITEM', text});

  return (
    <div>
      <Header title={state.title} onUpdate={updateTitle} onReset={reset} />
      <TodoItems
        items={state.items}
        onClick={updateItem}
        onDelete={deleteItem}
      />
      <Input onSubmit={addItem} />
    </div>
  );
};

export default Todo;
