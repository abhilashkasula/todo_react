import React from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import Input from './Input';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: [], nextId: 1, title: 'Todo'};
    this.addItem = this.addItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(text) {
    this.setState((state) => ({
      todoItems: state.todoItems.concat({
        id: state.nextId,
        text,
        status: 'undone',
      }),
      nextId: state.nextId + 1,
    }));
  }

  updateStatus(id) {
    this.setState((state) => {
      const todoItems = state.todoItems.map((item) => Object.assign({}, item));
      const item = todoItems.find((item) => item.id === id);
      const statusToggle = {done: 'undone', undone: 'doing', doing: 'done'};
      item.status = statusToggle[item.status];
      return {todoItems};
    });
  }

  updateTitle(title) {
    this.setState(() => ({title}));
  }

  deleteItem(id) {
    this.setState(({todoItems}) => {
      const index = todoItems.findIndex((item) => item.id === id);
      const newTodoItems = todoItems
        .slice(0, index)
        .concat(todoItems.slice(index + 1));
      console.log(newTodoItems);
      return {todoItems: newTodoItems};
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} onSubmit={this.updateTitle} />
        <TodoItems
          items={this.state.todoItems}
          onClick={this.updateStatus}
          onDelete={this.deleteItem}
        />
        <Input onSubmit={this.addItem} />
      </div>
    );
  }
}

export default Todo;
