import React from 'react';
import './todo.css';

const TodoItem = ({text, status}) => (
  <div className="todo-item">
    <div className={status === 'done' ? 'item-done' : 'item-undone'}></div>
    <label className={status === 'done' ? 'item-text-done': null} >
      {text}
    </label>
  </div>
);

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: [{text: 'Buy milk', status: 'done'}]};
  }

  render() {
    const items = this.state.todoItems.map(({text, status}) => (
      <TodoItem text={text} status={status} />
    ));

    return <div>{items}</div>;
  }
}

export default Todo;
