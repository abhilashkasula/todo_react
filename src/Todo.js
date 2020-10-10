import React from 'react';
import TodoItems from './TodoItems';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: [], text: '', nextId: 1};
    this.handleInput = (e) => {
      this.handleInputValue(e.target.value);
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputValue(text) {
    this.setState(() => ({text}));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState((state) => ({
      todoItems: state.todoItems.concat({
        id: state.nextId,
        text: state.text,
        status: 'undone',
      }),
      text: '',
      nextId: state.nextId + 1,
    }));
  }

  handleClick(id) {
    this.setState((state) => {
      const todoItems = state.todoItems.map((item) => Object.assign({}, item));
      const item = todoItems.find((item) => item.id === id);
      const statusToggle = {done: 'undone', undone: 'done'};
      item.status = statusToggle[item.status];
      return {todoItems};
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">Todo</h1>
        <TodoItems items={this.state.todoItems} onClick={this.handleClick} />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleInput}
            className="textbox"
          />
        </form>
      </div>
    );
  }
}

export default Todo;
