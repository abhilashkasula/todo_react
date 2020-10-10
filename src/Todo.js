import React from 'react';
import './todo.css';

const TodoItem = ({text, status}) => (
  <div className="todo-item">
    <div className={status === 'done' ? 'item-done' : 'item-undone'}></div>
    <label className={status === 'done' ? 'item-text-done' : null}>
      {text}
    </label>
  </div>
);

const TodoItems = (props) => {
  const items = props.items.map(({text, status}, index) => (
    <TodoItem text={text} status={status} key={index} />
  ));

  return <div>{items}</div>;
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: [{text: 'Buy milk', status: 'done'}], text: ''};
    this.handleInputValue = (e) => {
      this.handleInput(e.target.value);
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(text) {
    this.setState(() => ({text}));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState((state) => ({
      todoItems: state.todoItems.concat({text: state.text, status: 'not-done'}),
      text: '',
    }));
  }

  render() {
    return (
      <div>
        <TodoItems items={this.state.todoItems} />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleInputValue} />
        </form>
      </div>
    );
  }
}

export default Todo;
