import React, {useState} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import Input from './Input';
import './todo.css';

const Todo = () => {
  const [items, updateItems] = useState([]);
  const [title, setTitle] = useState('Todo');
  const [nextId, setNextId] = useState(1);

  const updateStatus = (id) => {
    updateItems((items) => {
      const newItems = items.map((item) => Object.assign({}, item));
      const item = newItems.find((item) => item.id === id);
      const statusToggle = {done: 'undone', undone: 'doing', doing: 'done'};
      item.status = statusToggle[item.status];
      return newItems;
    });
  };

  const deleteItem = (id) => {
    updateItems((items) => items.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    updateItems((items) => {
      const newItem = {id: nextId, text, status: 'undone'};
      setNextId(nextId + 1);
      return items.concat(newItem);
    });
  };

  const reset = () => {
    updateItems([]);
    setNextId(1);
    setTitle('Todo');
  };

  return (
    <div>
      <Header
        title={title}
        onUpdate={(text) => setTitle(text)}
        onReset={reset}
      />
      <TodoItems items={items} onClick={updateStatus} onDelete={deleteItem} />
      <Input onSubmit={addItem} />
    </div>
  );
};

export default Todo;
