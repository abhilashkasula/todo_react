import React from 'react';
import TodoItems from './TodoItems';
import Input from './Input';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: [], nextId: 1};
    this.addItem = this.addItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
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

  render() {
    return (
      <div>
        <h1 className="header">Todo</h1>
        <TodoItems items={this.state.todoItems} onClick={this.updateStatus} />
        <Input onSubmit={this.addItem} />
      </div>
    );
  }
}

export default Todo;
