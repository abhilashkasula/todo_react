import React from 'react';
import TodoItems from './TodoItems';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: [], text: '', nextId: 1};
    this.handleInputValue = (e) => {
      this.handleInput(e.target.value);
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(text) {
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
      const newItems = state.todoItems.map((item) => Object.assign({}, item));
      const item = newItems.find((item) => item.id === id);
      item.status = item.status === 'done' ? 'undone' : 'done';
      return {todoItems: newItems};
    });
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoItems items={this.state.todoItems} onClick={this.handleClick} />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleInputValue} style={{fontSize: '20px'}} />
        </form>
      </div>
    );
  }
}

export default Todo;
