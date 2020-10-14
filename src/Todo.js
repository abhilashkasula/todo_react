import React, {useEffect, useState} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import Input from './Input';
import './todo.css';
import TodoAPI from './TodoAPI';

const Todo = () => {
  const [state, setState] = useState({items: [], title: 'Todo'});

  useEffect(() => TodoAPI.initData().then((state) => setState(state)), []);

  const addItem = (text) =>
    TodoAPI.addItem(text).then((state) => setState(state));

  const updateTitle = (title) =>
    TodoAPI.updateTitle(title).then((state) => setState(state));

  const reset = () => TodoAPI.reset().then((state) => setState(state));

  const updateItem = (id) =>
    TodoAPI.updateItem(id).then((state) => setState(state));

  const deleteItem = (id) =>
    TodoAPI.deleteItem(id).then((state) => setState(state));

  return (
    <div>
      <Header title={state.title} onUpdate={updateTitle} onReset={reset} />
      <TodoItems
        items={state.items}
        onUpdate={updateItem}
        onDelete={deleteItem}
      />
      <Input onSubmit={addItem} />
    </div>
  );
};

export default Todo;
