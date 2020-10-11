import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false};
    this.showDeleteOption = this.showDeleteOption.bind(this);
    this.hideDeleteOption = this.hideDeleteOption.bind(this);
    this.handleStatus = () => this.props.onClick(this.props.id);
    this.handleDelete = () => this.props.onDelete(this.props.id);
  }

  showDeleteOption() {
    this.setState(() => ({isHovered: true}));
  }

  hideDeleteOption() {
    this.setState(() => ({isHovered: false}));
  }

  render() {
    return (
      <div
        className='todo-item'
        onMouseEnter={this.showDeleteOption}
        onMouseLeave={this.hideDeleteOption}
      >
        <div onClick={this.handleStatus}>
          <div className={`item-${this.props.status}`}></div>
          <label className={`item-text-${this.props.status}`}>
            {this.props.text}
          </label>
        </div>
        <div onClick={this.handleDelete}>{this.state.isHovered ? 'X' : ''}</div>
      </div>
    );
  }
}

export default TodoItem;
