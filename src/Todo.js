import React, {useReducer} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import Input from './Input';
import {todoReducer, initialState} from './todoReducer';
import TodoContext from './TodoContext';
import './todo.css';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addItem = (text) => dispatch({type: 'ADD_ITEM', text});

  return (
    <TodoContext.Provider value={{state, dispatch}}>
      <Header title={state.title} />
      <TodoItems items={state.items} />
      <Input onSubmit={addItem} />
    </TodoContext.Provider>
  );
};

export default Todo;
