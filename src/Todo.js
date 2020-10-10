import React from 'react';

const TodoItem = ({text, status}) => (
  <div style={{display: 'flex'}}>
    <div style={{background: 'lightblue', width: '10px', marginRight: '10px'}} ></div>
    <label style={status === 'done' ? {textDecoration: 'line-through'} : {}} >{text}</label>
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

    return <div >{items}</div>;
  }
}

export default Todo;
