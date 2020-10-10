import React from 'react';
import './todo.css';

const TodoItem = ({id, text, status, onClick}) => {
  // console.log(id);
  return (
    <div className="todo-item">
      <div className={status === 'done' ? 'item-done' : 'item-undone'}></div>
      <label
        className={status === 'done' ? 'item-text-done' : null}
        onClick={() => onClick(id)}
      >
        {text}
      </label>
    </div>
  );
};

const TodoItems = (props) => {
  const items = props.items.map(({id, text, status}) => (
    <TodoItem
      id={id}
      text={text}
      status={status}
      key={id}
      onClick={props.onClick}
    />
  ));

  return <div>{items}</div>;
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [{text: 'Buy milk', status: 'done', id: 0}],
      text: '',
      nextId: 1,
    };
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
      const newTodoItems = state.todoItems.map(item => Object.assign({}, item));
      const item = newTodoItems.find((item) => item.id === id);
      item.status = item.status === 'done' ? 'undone' : 'done';
      return {todoItems: newTodoItems};
    });
  }

  render() {
    return (
      <div>
        <TodoItems items={this.state.todoItems} onClick={this.handleClick} />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleInputValue} />
        </form>
      </div>
    );
  }
}

export default Todo;
